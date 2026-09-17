(() => {
  function initForm() {
    const cfg = window.FORM_CONFIG || window.siteConfig;
    if (!cfg) return;

    const $ = (id) => document.getElementById(id);

    try {
      document.title = `${cfg.product || "Website"} · order form`;
      if ($("productName")) $("productName").textContent = cfg.product || "";
      if ($("motif")) $("motif").textContent = cfg.motif || "𓏲";
      if ($("contextText")) $("contextText").textContent = cfg.context || "";
      if ($("mediaText")) $("mediaText").textContent = `kebutuhan media: ${cfg.media || "-"}`;

      function rupiah(num) {
        return "Rp" + Number(num || 0).toLocaleString("id-ID");
      }

      function slugify(text) {
        return (text || "").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
      }

      function validHex(hex) {
        return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex || "");
      }

      const defaultSwatches = $("defaultSwatches");
      if (defaultSwatches && Array.isArray(cfg.palette)) {
        defaultSwatches.innerHTML = "";
        cfg.palette.forEach((hex) => {
          const swatch = document.createElement("span");
          swatch.className = "swatch";
          swatch.style.background = hex;
          swatch.title = hex;
          defaultSwatches.appendChild(swatch);
        });
      }

      const paletteInputs = $("paletteInputs");
      if (paletteInputs && Array.isArray(cfg.palette)) {
        paletteInputs.innerHTML = "";
        cfg.palette.forEach((hex, i) => {
          const label = document.createElement("label");
          label.className = "field";
          const span = document.createElement("span");
          span.textContent = `color 0${i + 1}`;
          const input = document.createElement("input");
          input.type = "text";
          input.value = hex;
          input.dataset.index = String(i);
          input.required = true;
          label.append(span, input);
          paletteInputs.appendChild(label);
        });
      }

      function getTotal() {
        return (cfg.price || 0) + ($("recolorYes")?.checked ? 2000 : 0) + ($("rush")?.checked ? 4000 : 0);
      }

      function updatePrice() {
        if ($("priceOut")) $("priceOut").textContent = rupiah(getTotal());
      }

      document.querySelectorAll('input[name="recolor"]').forEach((radio) => {
        radio.id = radio.value === "yes" ? "recolorYes" : "recolorNo";
        radio.addEventListener("change", () => {
          $("pillNo")?.classList.toggle("active", $("recolorNo")?.checked);
          $("pillYes")?.classList.toggle("active", $("recolorYes")?.checked);
          paletteInputs?.classList.toggle("show", $("recolorYes")?.checked);
          updatePrice();
        });
      });
      $("rush")?.addEventListener("change", updatePrice);

      const dynamicRoot = $("dynamicSections");
      if (dynamicRoot && Array.isArray(cfg.sections)) {
        dynamicRoot.innerHTML = "";
        cfg.sections.forEach((section, sectionIndex) => {
          const card = document.createElement("section");
          card.className = "exhibit";

          const heading = document.createElement("div");
          heading.className = "exhibit-head";
          const number = document.createElement("span");
          number.className = "exhibit-num";
          number.textContent = String(sectionIndex + 2).padStart(2, "0");
          const copy = document.createElement("div");
          const title = document.createElement("h2");
          title.className = "exhibit-title";
          title.textContent = section.title || "";
          const sub = document.createElement("p");
          sub.className = "exhibit-sub";
          sub.textContent = "replace sesuai isi dan konteks website";
          copy.append(title, sub);
          heading.append(number, copy);

          const body = document.createElement("div");
          body.className = "exhibit-body row2";
          if (Array.isArray(section.fields)) {
            section.fields.forEach((field) => {
              const optional = (field.key || "").includes("reply_username");
              const label = document.createElement("label");
              label.className = "field" + (field.long ? " long" : "");
              const labelText = document.createElement("span");
              labelText.textContent = (field.label || field.key) + (optional ? " (optional)" : "");
              if (!optional) {
                const mark = document.createElement("b");
                mark.textContent = " *";
                labelText.appendChild(mark);
              }
              const input = document.createElement(field.long ? "textarea" : "input");
              if (!field.long) input.type = "text";
              input.id = "field_" + field.key;
              input.dataset.key = field.key;
              input.dataset.label = field.label || field.key;
              input.dataset.required = optional ? "false" : "true";
              input.placeholder = field.placeholder || "";
              if (field.long) input.rows = 4;
              label.append(labelText, input);
              body.appendChild(label);
            });
          }
          card.append(heading, body);
          dynamicRoot.appendChild(card);
        });
      }

      if ($("mediaNumber") && Array.isArray(cfg.sections)) {
        $("mediaNumber").textContent = String(cfg.sections.length + 2).padStart(2, "0");
      }
      if ($("linkNumber") && Array.isArray(cfg.sections)) {
        $("linkNumber").textContent = String(cfg.sections.length + 3).padStart(2, "0");
      }
      updatePrice();

      function clearErrors() {
        document.querySelectorAll(".invalid").forEach((element) => element.classList.remove("invalid"));
        if ($("formError")) $("formError").hidden = true;
      }

      function validate() {
        clearErrors();
        const required = [
          $("customerName"),
          $("customerTelegram"),
          $("deadline"),
          $("websiteTitle"),
          $("linkOne"),
          $("linkTwo")
        ].filter(Boolean);

        document.querySelectorAll('[data-required="true"]').forEach((input) => required.push(input));
        const invalid = required.filter((input) => !input.value.trim());

        if ($("recolorYes")?.checked && paletteInputs) {
          paletteInputs.querySelectorAll('input[type="text"]').forEach((input) => {
            if (!validHex(input.value.trim())) invalid.push(input);
          });
        }
        if ($("linkOne")?.value?.trim() && $("linkTwo")?.value?.trim() && slugify($("linkOne").value) === slugify($("linkTwo").value)) {
          if ($("linkTwo")) invalid.push($("linkTwo"));
        }

        [...new Set(invalid)].forEach((input) => {
          input.classList.add("invalid");
          input.closest(".link-suffix")?.classList.add("invalid");
        });
        if (invalid.length) {
          if ($("formError")) {
            $("formError").textContent = "masih ada " + new Set(invalid).size + " kolom yang belum valid. lengkapi dulu ya ♡";
            $("formError").hidden = false;
          }
          invalid[0].scrollIntoView({ behavior: "smooth", block: "center" });
          invalid[0].focus({ preventScroll: true });
          return false;
        }
        return true;
      }

      document.addEventListener("input", (event) => {
        event.target?.classList?.remove("invalid");
        event.target?.closest?.(".link-suffix")?.classList?.remove("invalid");
      });

      function buildOrderText() {
        const recolor = $("recolorYes")?.checked;
        const palette = paletteInputs ? Array.from(paletteInputs.querySelectorAll('input[type="text"]')).map((input) => input.value.trim().toUpperCase()) : [];
        const lines = [
          "𓏲 " + (cfg.product || "") + " form " + (cfg.motif || "𓏲"),
          "website price : " + rupiah(getTotal()),
          "terms & condition : agreed",
          "",
          "00 · customer identity",
          "name : " + ($("customerName")?.value?.trim() || ""),
          "username : " + ($("customerTelegram")?.value?.trim() || ""),
          "payment : qris no rate",
          "deadline : " + ($("deadline")?.value || "") + ($("rush")?.checked ? " (rush +Rp4.000)" : " (regular)"),
          "",
          "01 · website customization",
          "recolor : " + (recolor ? "yes (+Rp2.000)" : "no"),
          "palette : " + (recolor ? palette.join(", ") : (cfg.palette || []).join(", ")),
          ""
        ];

        if (Array.isArray(cfg.sections)) {
          cfg.sections.forEach((section, index) => {
            lines.push(String(index + 2).padStart(2, "0") + " · " + (section.title || ""));
            if (Array.isArray(section.fields)) {
              section.fields.forEach((field) => {
                const value = $("field_" + field.key)?.value?.trim() || "";
                lines.push((field.label || field.key) + " → " + (value || "(pakai default katalog)"));
              });
            }
            lines.push("");
          });
        }

        lines.push(($("mediaNumber")?.textContent || "media") + " · photos & background music");
        lines.push("requirements → " + (cfg.media || "-"));
        lines.push("media order note → " + ($("mediaNote")?.value?.trim() || "(tidak ada)"));
        lines.push("");
        lines.push(($("linkNumber")?.textContent || "link") + " · website link");
        lines.push("website title → " + ($("websiteTitle")?.value?.trim() || ""));
        lines.push("link option 01 → " + slugify($("linkOne")?.value || "") + ".netlify.app");
        lines.push("link option 02 → " + slugify($("linkTwo")?.value || "") + ".netlify.app");
        lines.push("");
        lines.push("foto/audio akan dikirim sebagai file di chat Telegram ini.");
        return lines.join("\n");
      }

      async function copyText(text) {
        if (window.isSecureContext && navigator.clipboard?.writeText) {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch (_) {}
        }
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.readOnly = true;
        textarea.style.cssText = "position:fixed;left:-999999px;top:-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        let copied = false;
        try { copied = document.execCommand("copy"); } catch (_) { copied = false; }
        textarea.remove();
        return copied;
      }

      $("orderForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validate()) return;
        const text = buildOrderText();
        if ($("outputText")) $("outputText").textContent = text;
        if ($("outputCard")) $("outputCard").hidden = false;
        if ($("sendStatus")) $("sendStatus").textContent = "siap disalin";
        if ($("resultMessage")) $("resultMessage").textContent = "Silakan klik tombol 'Salin Form' di bawah, lalu kirimkan ke kontak Telegram.";
        $("outputCard")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      $("copyButton")?.addEventListener("click", async () => {
        const text = $("outputText")?.textContent || "";
        const copied = await copyText(text);
        if (copied) {
          if ($("sendStatus")) $("sendStatus").textContent = "tersalin ✓";
          if ($("resultMessage")) $("resultMessage").textContent = "✓ Form berhasil disalin ke clipboard! Silakan klik tombol di bawah untuk langsung menuju ke chat Telegram.";
          const origText = $("copyButton")?.textContent;
          if ($("copyButton")) $("copyButton").textContent = "tersalin ✓";
          setTimeout(() => {
            if ($("copyButton")) $("copyButton").textContent = origText;
          }, 2500);
        } else {
          if ($("sendStatus")) $("sendStatus").textContent = "salin manual";
          if ($("resultMessage")) $("resultMessage").textContent = "Clipboard tidak dapat diakses otomatis. Silakan pilih dan salin teks di dalam kotak secara manual.";
        }
      });
    } catch (err) {
      console.error("Form initialization error:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }
})();
