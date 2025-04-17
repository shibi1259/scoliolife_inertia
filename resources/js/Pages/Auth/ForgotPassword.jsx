import Banner from '@/Components/Banner';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Forgot Password" />

            <div className="forgot-page">
                <Banner title='Forgot Password' />

                <div className="row">

                    <div className="col-sm-12 form-design">
                        {status && (
                            <div className="col-sm-12">
                                <div className="alert alert-success" role="alert">
                                    {status}
                                </div>
                            </div>
                        )}
                        <h2>Forgot Password</h2>
                        <p> Enter your email and we'll send you a link to reset your password. </p>
                        <form onSubmit={submit}>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2 text-danger" />

                            <div className="mt-4 d-flex align-items-center justify-content-end submit-btn contact-us">
                                <PrimaryButton className="btn btn-primary" disabled={processing}>
                                    Email Password Reset Link
                                </PrimaryButton>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
