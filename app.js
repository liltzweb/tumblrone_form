(() => {
  const cfg = window.FORM_CONFIG;
  if (!cfg) throw new Error("FORM_CONFIG is missing");

  const $ = (id) => document.getElementById(id);
  const rupiah = (value) => "Rp" + Number(value).toLocaleString("id-ID");
  const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  const validHex = (value) => /^#[0-9A-F]{6}$/i.test(value);

  function rgb(hex) {
    const value = hex.replace("#", "");
    return [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16));
  }

  function hex([r, g, b]) {
    return "#" + [r, g, b].map((value) => Math.round(value).toString(16).padStart(2, "0")).join("").toUpperCase();
  }

  function mix(a, b, amount) {
    const one = rgb(a);
    const two = rgb(b);
    return hex(one.map((value, index) => value * (1 - amount) + two[index] * amount));
  }

  function luminance(color) {
    return rgb(color).map((value) => {
      const channel = value / 255;
      return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  }

  function contrast(a, b) {
    const one = luminance(a);
    const two = luminance(b);
    return (Math.max(one, two) + 0.05) / (Math.min(one, two) + 0.05);
  }

  function saturation(color) {
    const values = rgb(color).map((value) => value / 255);
    const high = Math.max(...values);
    const low = Math.min(...values);
    return high === 0 ? 0 : (high - low) / high;
  }

  function applyReadableTheme() {
    const palette = cfg.palette.filter(validHex).map((color) => color.toUpperCase());
    const byLight = [...palette].sort((a, b) => luminance(a) - luminance(b));
    const lightest = byLight.at(-1) || "#F8F7F2";
    let ink = byLight[0] || "#10131A";
    const paper = "#FFFFFF";
    if (contrast(ink, paper) < 7) ink = "#15171C";

    const colorful = palette.filter((color) => saturation(color) > 0.28);
    let accent = colorful.sort((a, b) => saturation(b) - saturation(a))[0] || ink;
    if (contrast(accent, paper) < 3 && contrast(accent, ink) < 3) accent = mix(accent, ink, 0.36);
    const secondary = colorful.find((color) => color !== accent) || mix(accent, paper, 0.45);
    const accentInk = contrast(accent, paper) >= contrast(accent, "#000000") ? paper : "#000000";
    let accentText = accent;
    for (let step = 0; step < 12 && contrast(accentText, paper) < 4.5; step += 1) {
      accentText = mix(accentText, ink, 0.16);
    }

    const tokens = {
      "--canvas": mix(lightest, "#F5F4EF", 0.7),
      "--paper": paper,
      "--surface": mix(lightest, paper, 0.58),
      "--input": paper,
      "--ink": ink,
      "--muted": mix(ink, paper, 0.16),
      "--faded": mix(ink, paper, 0.24),
      "--accent": accent,
      "--accent-text": accentText,
      "--accent-ink": accentInk,
      "--accent-soft": mix(accent, paper, 0.87),
      "--secondary": secondary,
      "--line": mix(ink, paper, 0.8)
    };
    Object.entries(tokens).forEach(([name, value]) => document.documentElement.style.setProperty(name, value));
  }

  document.title = cfg.product + " · order form";
  document.body.dataset.theme = cfg.theme;
  applyReadableTheme();
  $("productName").textContent = cfg.product;
  $("motif").textContent = cfg.motif;
  $("contextText").textContent = cfg.context;
  $("mediaText").textContent = cfg.media;

  function getTotal() {
    return cfg.price + ($("recolorYes")?.checked ? 2000 : 0) + ($("decoration").checked ? 3000 : 0) + ($("rush").checked ? 4000 : 0);
  }

  function updatePrice() {
    $("priceOut").textContent = rupiah(getTotal());
  }

  const swatches = $("defaultSwatches");
  cfg.palette.forEach((color) => {
    const item = document.createElement("span");
    item.className = "swatch";
    const dot = document.createElement("i");
    dot.style.background = color;
    item.append(dot, document.createTextNode(color.toUpperCase()));
    swatches.appendChild(item);
  });

  const paletteInputs = $("paletteInputs");
  cfg.palette.forEach((color, index) => {
    const row = document.createElement("div");
    row.className = "palette-row";
    const picker = document.createElement("input");
    picker.type = "color";
    picker.value = color;
    picker.setAttribute("aria-label", "warna " + (index + 1));
    const input = document.createElement("input");
    input.type = "text";
    input.value = color.toUpperCase();
    input.maxLength = 7;
    input.dataset.palette = String(index);
    input.setAttribute("aria-label", "kode HEX warna " + (index + 1));
    picker.addEventListener("input", () => {
      input.value = picker.value.toUpperCase();
      input.classList.remove("invalid");
    });
    input.addEventListener("input", () => {
      let value = input.value.trim();
      if (value && !value.startsWith("#")) value = "#" + value;
      input.value = value.toUpperCase();
      input.classList.toggle("invalid", !validHex(input.value));
      if (validHex(input.value)) picker.value = input.value;
    });
    row.append(picker, input);
    paletteInputs.appendChild(row);
  });

  const radios = document.querySelectorAll('input[name="recolor"]');
  radios.forEach((radio) => {
    radio.id = radio.value === "yes" ? "recolorYes" : "recolorNo";
    radio.addEventListener("change", () => {
      $("pillNo").classList.toggle("active", $("recolorNo").checked);
      $("pillYes").classList.toggle("active", $("recolorYes").checked);
      paletteInputs.classList.toggle("show", $("recolorYes").checked);
      updatePrice();
    });
  });
  $("rush").addEventListener("change", updatePrice);
  $("decoration").addEventListener("change", () => {
    $("decorationNoteWrap").hidden = !$("decoration").checked;
    updatePrice();
  });

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
    if ($("decoration").checked) required.push($("decorationNote"));
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
      "simple decoration : " + ($("decoration").checked ? "yes (+Rp3.000) — " + $("decorationNote").value.trim() : "no"),
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

  $("orderForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validate()) return;
    const text = buildOrderText();
    $("outputText").textContent = text;
    $("outputCard").hidden = false;
    $("outputCard").scrollIntoView({ behavior: "smooth", block: "start" });

    const chatWindow = window.open("https://t.me/mirssy", "_blank");
    if (chatWindow) chatWindow.opener = null;
    const copied = await copyText(text);
    $("sendStatus").textContent = copied ? "siap dikirim ✓" : "salin manual";
    if (copied && chatWindow) {
      $("resultMessage").textContent = "teks pesanan sudah tersalin. chat @mirssy terbuka — tinggal paste dan lampirkan media.";
    } else if (copied) {
      $("resultMessage").textContent = "teks sudah tersalin, tetapi popup diblokir. tekan tombol buka t.me/mirssy.";
    } else {
      $("resultMessage").textContent = "clipboard diblokir browser. tekan salin teks lagi atau salin ringkasan secara manual.";
    }
  });

  $("copyButton").addEventListener("click", async () => {
    const copied = await copyText($("outputText").textContent);
    $("resultMessage").textContent = copied ? "teks berhasil disalin ulang ♡" : "clipboard masih diblokir; pilih ringkasan lalu salin manual.";
  });
})();
