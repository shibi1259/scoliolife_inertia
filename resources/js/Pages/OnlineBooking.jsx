import React from "react";
import Banner from "@/Components/Banner";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const OnlineBooking = () => {


    return (
        <AuthenticatedLayout>
            <Banner title={'Online Booking'} />
            <div className="custom-iframe">
                <iframe
                    src="https://calendar.google.com/calendar/appointments/AcZssZ2ZSvJEdJjQgBwtDftJ1R_ne-M7HEtSlAg7fUk=?gv=true"
                    style={{
                        border: "0",
                        width: "100%",
                        height: "600",
                        frameBorder: "0",
                    }}
                />
            </div>

        </AuthenticatedLayout>
    );
};

export default OnlineBooking;
