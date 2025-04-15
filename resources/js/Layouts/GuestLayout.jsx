import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            <Footer />
        </>
    );
}
