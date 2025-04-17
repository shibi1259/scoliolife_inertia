import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="my-account">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <nav className="woocommerce-MyAccount-navigation">
                                <ul>

                                    <li className="navigation-link--dashboard is-active"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                        <Link to="/my-account">Dashboard</Link>
                                    </li>
                                    <li className="navigation-link--orders_info"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                        <Link to="/order">Orders</Link>

                                    </li>

                                    <li className="navigation-link--edit-account"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                        <Link to="/account-details">Account details</Link>
                                    </li>
                                    <li className="navigation-link--customer-logout"><i className="fa fa-angle-right" aria-hidden="true"></i>
                                     <Link href={route("logout")} method="post">  <span> Log Out </span> </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-9">
                            <div className="woocommerce-MyAccount-content">
                                <div className="woocommerce-notices-wrapper"></div>
                                <p>
                                    Hello <strong>{auth.user.name}</strong> (not <strong>{auth.user.name}</strong>? <Link href={route("logout")} method="post" className='dashboard-logout-span'>  <span> Log Out </span> </Link>)
                                </p>
                                <p>
                                    From your account dashboard you can view your <Link to="/order">recent orders</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
















        </AuthenticatedLayout>
    );
}
