import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    
    return (
        <>
            <MainHeader user={user} />

            <main>{children}</main>

            <Footer/>
        </>
    );
}
