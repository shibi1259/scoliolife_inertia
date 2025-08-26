import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { Link, usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    const languages = usePage().props.languages
    return (
        <>
            <MainHeader languages={languages} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
