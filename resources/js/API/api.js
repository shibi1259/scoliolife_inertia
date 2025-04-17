const API = import.meta.env.VITE_APP_API_URL;
export const getProducts = async (lang) => { 
    const response = await fetch(`${API}/products/filter/${lang}`);
    const data = await response.json();
    return data;
}

export const getLanguages = async () => {
    const response = await fetch(`${API}/languages`);
    const data = await response.json();
    return data;
}