import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import { usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    const { languages, header, footer, contactDetails, widgets, disclaimer } = usePage().props;
    return (
        <>
            <MainHeader languages={languages} header={header} />
            <main>{children}</main>
            <Footer footer={footer} widgets={widgets} contactDetails={contactDetails} disclaimer={disclaimer} />
        </>
    );
}
