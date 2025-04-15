import Banner from "@/Components/Home/Banner";
import Footer from "@/Components/Footer";
import MainHeader from "@/Components/Headers/MainHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import NonTreatment from "@/Components/Home/NonTreatment";
import Special from "@/Components/Home/Special";
import Featured from "@/Components/Home/Featured";
import Video from "@/Components/Home/Video";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome" />
            <Banner />
            <NonTreatment />
            <Special />
            <Video />
            <Featured />
                {phpVersion} - {laravelVersion} -{" "}
                {auth.user ? auth.user.name : "Guest"}
        </AuthenticatedLayout>
    );
}
