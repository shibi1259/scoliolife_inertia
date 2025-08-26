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

export const getMenuItems = async (language) => {
    const response = await fetch(`${API}/menuitem/header/${language}`);
    const data = await response.json();
    return data;
}

export const getFooterItems = async (language) => {
    const response = await fetch(`${API}/menuitem/footer/${language}`);
    const data = await response.json();
    return data;
}