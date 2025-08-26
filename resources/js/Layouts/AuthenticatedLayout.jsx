import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const languages = usePage().props.languages
    return (
        <>
            <MainHeader user={user} languages={languages} />

            <main>{children}</main>

            <Footer/>
        </>
    );
}
