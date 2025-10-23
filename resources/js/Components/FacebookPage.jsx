import React from "react";

const languageMap = {
    en_SG: "en",
    en_US: "en",
    en_MY: "my",
    es_ES: "es",
    es_MX: "es",
    fr_FR: "fr",
    id_ID: "id",
    it_IT: "it",
    de_DE: "de",
    zh_CN: "cn",
    zh_HK: "hk",
    ja_JP: "jp",
};

export default function FacebookPage({ currentLanguage }) {
    const langCode = languageMap[currentLanguage] || "en";

    // Build dynamic Facebook page URL
    const facebookPageURL = langCode === "en" ? "https://www.facebook.com/scoliolife" : `https://www.facebook.com/scoliolife.${langCode}`;

    // Build full Facebook Page Plugin URL
    const fbPluginURL = `https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df318a4edf11138%26domain%3Dscoliolife.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fscoliolife.com%252Ffb1839846f28e4%26relation%3Dparent.parent&container_width=400&height=380&hide_cover=true&href=${encodeURIComponent(facebookPageURL)}&locale=en_GB&sdk=joey&show_facepile=false&small_header=true&tabs=timeline&width=500`;

    return (
        <iframe
            title="Facebook Page Plugin"
            src={fbPluginURL}
            width="500"
            height="380"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
        ></iframe>
    );
}
