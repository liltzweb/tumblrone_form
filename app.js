(() => {
  const cfg = window.FORM_CONFIG || window.siteConfig;
  if (!cfg) return;

  const $ = (id) => document.getElementById(id);

  document.title = `${cfg.product} · order form`;
  $("productName").textContent = cfg.product;
  $("motif").textContent = cfg.motif || "𓏲";
  $("contextText").textContent = cfg.context;
  $("mediaText").textContent = `kebutuhan media: ${cfg.media}`;

  function rupiah(num) {
    return "Rp" + Number(num).toLocaleString("id-ID");
  }

  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
  }

  function validHex(hex) {
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
  }

  const defaultSwatches = $("defaultSwatches");
  defaultSwatches.innerHTML = "";
  cfg.palette.forEach((hex) => {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = hex;
    swatch.title = hex;
    defaultSwatches.appendChild(swatch);
  });

  const paletteInputs = $("paletteInputs");
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

  function getTotal() {
    return cfg.price + ($("recolorYes")?.checked ? 2000 : 0) + ($("rush").checked ? 4000 : 0);
  }

  function updatePrice() {
    $("priceOut").textContent = rupiah(getTotal());
  }

  document.querySelectorAll('input[name="recolor"]').forEach((radio) => {
    radio.id = radio.value === "yes" ? "recolorYes" : "recolorNo";
    radio.addEventListener("change", () => {
      $("pillNo").classList.toggle("active", $("recolorNo").checked);
      $("pillYes").classList.toggle("active", $("recolorYes").checked);
      paletteInputs.classList.toggle("show", $("recolorYes").checked);
      updatePrice();
    });
  });
  $("rush").addEventListener("change", updatePrice);

  const dynamicRoot = $("dynamicSections");
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
    title.textContent = section.title;
    const sub = document.createElement("p");
    sub.className = "exhibit-sub";
    sub.textContent = "replace sesuai isi dan konteks website";
    copy.append(title, sub);
    heading.append(number, copy);

    const body = document.createElement("div");
    body.className = "exhibit-body row2";
    section.fields.forEach((field) => {
      const optional = field.key.includes("reply_username");
      const label = document.createElement("label");
      label.className = "field" + (field.long ? " long" : "");
      const labelText = document.createElement("span");
      labelText.textContent = field.label + (optional ? " (optional)" : "");
      if (!optional) {
        const mark = document.createElement("b");
        mark.textContent = " *";
        labelText.appendChild(mark);
      }
      const input = document.createElement(field.long ? "textarea" : "input");
      if (!field.long) input.type = "text";
      input.id = "field_" + field.key;
      input.dataset.key = field.key;
      input.dataset.label = field.label;
      input.dataset.required = optional ? "false" : "true";
      input.placeholder = field.placeholder;
      if (field.long) input.rows = 4;
      label.append(labelText, input);
      body.appendChild(label);
    });
    card.append(heading, body);
    dynamicRoot.appendChild(card);
  });

  $("mediaNumber").textContent = String(cfg.sections.length + 2).padStart(2, "0");
  $("linkNumber").textContent = String(cfg.sections.length + 3).padStart(2, "0");
  updatePrice();

  function clearErrors() {
    document.querySelectorAll(".invalid").forEach((element) => element.classList.remove("invalid"));
    $("formError").hidden = true;
  }

  function validate() {
    clearErrors();
    const required = [$("customerName"), $("customerTelegram"), $("deadline"), $("websiteTitle"), $("linkOne"), $("linkTwo")];
    document.querySelectorAll('[data-required="true"]').forEach((input) => required.push(input));
    const invalid = required.filter((input) => !input.value.trim());

    if ($("recolorYes").checked) {
      paletteInputs.querySelectorAll('input[type="text"]').forEach((input) => {
        if (!validHex(input.value.trim())) invalid.push(input);
      });
    }
    if ($("linkOne").value.trim() && slugify($("linkOne").value) === slugify($("linkTwo").value)) {
      invalid.push($("linkTwo"));
    }

    [...new Set(invalid)].forEach((input) => {
      input.classList.add("invalid");
      input.closest(".link-suffix")?.classList.add("invalid");
    });
    if (invalid.length) {
      $("formError").textContent = "masih ada " + new Set(invalid).size + " kolom yang belum valid. lengkapi dulu ya ♡";
      $("formError").hidden = false;
      invalid[0].scrollIntoView({ behavior: "smooth", block: "center" });
      invalid[0].focus({ preventScroll: true });
      return false;
    }
    return true;
  }

  document.addEventListener("input", (event) => {
    event.target.classList?.remove("invalid");
    event.target.closest?.(".link-suffix")?.classList.remove("invalid");
  });

  function buildOrderText() {
    const recolor = $("recolorYes").checked;
    const palette = Array.from(paletteInputs.querySelectorAll('input[type="text"]')).map((input) => input.value.trim().toUpperCase());
    const lines = [
      "𓏲 " + cfg.product + " form " + cfg.motif,
      "website price : " + rupiah(getTotal()),
      "terms & condition : agreed",
      "",
      "00 · customer identity",
      "name : " + $("customerName").value.trim(),
      "username : " + $("customerTelegram").value.trim(),
      "payment : qris no rate",
      "deadline : " + $("deadline").value + ($("rush").checked ? " (rush +Rp4.000)" : " (regular)"),
      "",
      "01 · website customization",
      "recolor : " + (recolor ? "yes (+Rp2.000)" : "no"),
      "palette : " + (recolor ? palette.join(", ") : cfg.palette.join(", ")),
      ""
    ];

    cfg.sections.forEach((section, index) => {
      lines.push(String(index + 2).padStart(2, "0") + " · " + section.title);
      section.fields.forEach((field) => {
        const value = $("field_" + field.key).value.trim();
        lines.push(field.label + " → " + (value || "(pakai default katalog)"));
      });
      lines.push("");
    });

    lines.push($("mediaNumber").textContent + " · photos & background music");
    lines.push("requirements → " + cfg.media);
    lines.push("media order note → " + ($("mediaNote").value.trim() || "(tidak ada)"));
    lines.push("");
    lines.push($("linkNumber").textContent + " · website link");
    lines.push("website title → " + $("websiteTitle").value.trim());
    lines.push("link option 01 → " + slugify($("linkOne").value) + ".netlify.app");
    lines.push("link option 02 → " + slugify($("linkTwo").value) + ".netlify.app");
    lines.push("");
    lines.push("foto/audio akan dikirim sebagai file di chat Telegram ini.");
    return lines.join("
");
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

    $("orderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validate()) return;
    const text = buildOrderText();
    $("outputText").textContent = text;
    $("outputCard").hidden = false;
    $("sendStatus").textContent = "siap disalin";
    $("resultMessage").textContent = "Silakan klik tombol 'Salin Form' di bawah, lalu kirimkan ke kontak Telegram.";
    $("outputCard").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("copyButton").addEventListener("click", async () => {
    const text = $("outputText").textContent;
    const copied = await copyText(text);
    if (copied) {
      $("sendStatus").textContent = "tersalin ✓";
      $("resultMessage").textContent = "✓ Form berhasil disalin ke clipboard! Silakan klik tombol di bawah untuk langsung menuju ke chat Telegram.";
      const origText = $("copyButton").textContent;
      $("copyButton").textContent = "tersalin ✓";
      setTimeout(() => {
        $("copyButton").textContent = origText;
      }, 2500);
    } else {
      $("sendStatus").textContent = "salin manual";
      $("resultMessage").textContent = "Clipboard tidak dapat diakses otomatis. Silakan pilih dan salin teks di dalam kotak secara manual.";
    }
  });
})();
