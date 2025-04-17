import Banner from "@/Components/Banner";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <Banner title="Register" />
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}

            <div className="register-page">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="login-img">
                            <img
                                src="https://sladmin.scoliolife.com/uploads/2023/05/login-bg-600x587-1.webp"
                                alt=""
                            />
                            <div className="side-btn">
                                <Link
                                    href={route("login")}
                                    className={`${route().current("login")
                                            ? "login"
                                            : "register"
                                        }`}
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={route("register")}
                                    className={`${route().current("register")
                                            ? "login"
                                            : "register"
                                        }`}
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="register-sec">
                            <h3>Register</h3>
                            <p>Register for an Account</p>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <div className="gmail-login">

                                        <TextInput
                                            id="name"
                                            type="name"
                                            name="name"
                                            value={data.name}
                                            className="form-control"
                                            autoComplete="name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <FaRegUserCircle />
                                    </div>
                                    {errors.name && (
                                        <InputError
                                            message={errors.name}
                                            className="mt-2 validations"
                                        />
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="gmail-login">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <CiMail />
                                    </div>
                                    {errors.email && (
                                        <InputError
                                            message={errors.email}
                                            className="mt-2 validations"
                                        />
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="gmail-login">
                                        <TextInput
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={data.password}
                                            className="form-control"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {showPassword ? (
                                            <FaEyeSlash
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="eye-icon"
                                            />
                                        ) : (
                                            <FaEye
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="eye-icon"
                                            />
                                        )}
                                    </div>
                                    {errors.password && (
                                        <InputError
                                            message={errors.password}
                                            className="mt-2 validations"
                                        />
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                       Confirm Password
                                    </label>
                                    <div className="gmail-login">
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        {showPassword ? (
                                            <FaEyeSlash
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="eye-icon"
                                            />
                                        ) : (
                                            <FaEye
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                                className="eye-icon"
                                            />
                                        )}
                                    </div>
                                    {errors.password_confirmation && (
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2 validations"
                                        />
                                    )}
                                </div>
                                <div className="mb-3 checkbox">
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        name="subscribe"
                                    ></input>
                                    <p>
                                        Subscribe to our newsletter to unlock
                                        the latest deals and access to high
                                        quality scoliosis articles.
                                    </p>
                                    {errors.subscribe && (
                                        <p className="validations">
                                            This field is required
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="log-btn"
                                    name="wp-submit"
                                    value="Register"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
