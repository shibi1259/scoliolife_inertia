import React, { useState } from "react";
import { useLaravelReactI18n } from "laravel-react-i18n";

const AttributeDropdown = ({ attributes = {}, onSelectSize = () => null , calculatedPrice }) => {
  const { t } = useLaravelReactI18n();
  const [toolUSD, setToolUSD] = useState(false);
  const [customizedSelected, setCustomizedSelected] = useState(false);

  /** ✅ Handle dropdown change */
  const handleChange = (e, name) => {
    const value = e.target.value;

    if (name === "Tool") setToolUSD(value === "DVD" || value === "USB");
    if (name === "Customized Report") setCustomizedSelected(value === "Yes");

    if (name === "image") {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => onSelectSize(reader.result, name);
      reader.readAsDataURL(file);
    } else {
      onSelectSize(value, name);
    }
  };

  /** ✅ Reusable dropdown renderer */
  const Dropdown = ({ label, name, options, translateKey }) =>
    options?.length ? (
      <div className="add_language_dropdown">
        <label htmlFor={name}>{label}</label>
        <select id={name} onChange={(e) => handleChange(e, name)}>
          <option value="">{t("product_dropdown")['choose_an_option']}</option>
          {options.map((opt, i) => (
            <option key={i} value={translateKey ? t(`product_dropdown`)[opt] : opt}>
              {translateKey ? t(`product_dropdown`)[opt] : opt}
            </option>
          ))}
        </select>
      </div>
    ) : null;

  return (
    <>
      {/* Core Dropdowns */}
      <Dropdown
        label={t("product_dropdown")['customized_report']}
        name="Customized Report"
        options={attributes["Customized Report"]}
      />
      <Dropdown
        label={t("product_dropdown")['varition_language']}
        name="Language"
        options={attributes.Language}
      />
      <Dropdown
        label={t("product_dropdown")['tool']}
        name="Tool"
        options={attributes.Tool}
      />
      <Dropdown
        label={t("product_dropdown")['gender']}
        name="Gender"
        options={attributes.Gender}
        translateKey
      />
      <Dropdown
        label={t("product_dropdown")['height']}
        name="Height"
        options={attributes.Height}
      />
      <Dropdown
        label={t("product_dropdown")['weight']}
        name="Weight"
        options={attributes.Weight}
      />
      <Dropdown
        label={t("product_dropdown")['size']}
        name="Size"
        options={
          attributes["ScolioInsole Size"] ||
          attributes["STB Size"]
        }
      />
      <Dropdown
        label={t("product_dropdown")['size']}
        name="Support Knee Guard Size"
        options={attributes["Support Knee Guard Size"]}
      />
      <Dropdown
        label={t("product_dropdown")['size']}
        name="ScolioPosture Corrector Size"
        options={attributes["ScolioPosture Corrector Size"]}
      />
      <Dropdown
        label={t("product_dropdown")['consultation']}
        name="Consultation Type"
        options={attributes["Consultation Type"]}
      />

      {/* ✅ Image upload when customized report is Yes */}
      {customizedSelected && (
        <div className="wau_wrapper_div">
          <label htmlFor="wau_file_addon">{t("product_dropdown")["upload_an_image:"]}</label>
          <input
            type="file"
            id="wau_file_addon"
            name="wau_file_addon"
            accept="image/*"
            className="wau-auto-width wau-files"
            onChange={(e) => handleChange(e, "image")}
          />
        </div>
      )}

      {/* ✅ Price display when Tool is DVD/USB */}
      {toolUSD && (
        <div className="wau_wrapper_div">
          ${calculatedPrice ? parseFloat(calculatedPrice).toFixed(2) : "0.00"} SGD
        </div>
      )}
    </>
  );
};

export default AttributeDropdown;
