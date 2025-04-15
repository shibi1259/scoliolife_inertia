import { Head } from "@inertiajs/react";

import Banner from "@/Components/Home/Banner";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NonTreatment from "@/Components/Home/NonTreatment";
import Special from "@/Components/Home/Special";
import Featured from "@/Components/Home/Featured";
import Video from "@/Components/Home/Video";
import Praise from "@/Components/Home/Praise";
import Benifits from "@/Components/Home/Benifits";
import Contact from "@/Components/Home/Contact";
import Faqs from "@/Components/Home/Faqs";
import Newslatter from "@/Components/Home/Newslatter";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome" />
            <Banner />
            <NonTreatment />
            <Special />
            <Video />
            <Featured />
            <Praise />
            <Benifits />
            <Contact />
            <Faqs />
            <Newslatter />
        </AuthenticatedLayout>
    );
}
