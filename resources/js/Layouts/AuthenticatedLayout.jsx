import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const { languages, header, footer, contactDetails, widgets, disclaimer } = usePage().props;
    return (
        <>
            <MainHeader user={user} languages={languages} header={header} />
            <main>{children}</main>
            <Footer footer={footer} contactDetails={contactDetails} widgets={widgets} disclaimer={disclaimer} />
        </>
    );
}
