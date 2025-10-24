import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;
export const getProducts = async (lang) => {
    const response = await fetch(`${API}/products/filter/${lang}`);
    const data = await response.json();
    return data;
};

export const getProduct = async (slug, lang, auth) => {
    const params = auth && auth.id ? `?user=${auth?.id}` : "";
    console.log({slug,lang,auth});
    const response = await axios.get(`${API}/products/${slug}/${lang}${params}`);
    return response.data;
};
