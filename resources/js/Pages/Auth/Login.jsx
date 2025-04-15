import Banner from "@/Components/Banner";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ status, canResetPassword }) {
        const [showPassword, setShowPassword] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <Banner title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}


            <div className="login-page">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="login-img">
                            <img
                                src="https://sladmin.scoliolife.com/uploads/2023/05/login-bg-600x587-1.webp"
                                alt="https://sladmin.scoliolife.com/uploads/2023/05/login-bg-600x587-1.webp"
                            />
                            <div className="side-btn">
                                <Link
                                    href={route("login")}
                                    className={`${
                                        route().current("login")
                                            ? "login"
                                            : "register"
                                    }`}
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={route("register")}
                                    className={`${
                                        route().current("register")
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
                        <div className="log-sec">
                            <h3>Log In</h3>
                            <p>Log in to continue in our website</p>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        Username or Email
                                    </label>
                                    <div className="gmail-login">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />

                                        <CiMail />
                                    </div>
                                    <InputError
                                        message={errors.email}
                                        className="mt-2 validations"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="password-login">
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
                                            autoComplete="current-password"
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

                                    <InputError
                                        message={errors.password}
                                        className="mt-2 validations"
                                    />
                                </div>
                                <div className="mb-3 checkbox">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="log-btn"
                                    name="wp-submit"
                                    id="wppb-submit"
                                    value="Log In"
                                    disabled={processing}
                                >
                                    Login
                                </button>
                            </form>

                            <div className="googel-login">
                                {/* <GoogleLogin
                  clientId="client-id"
                  buttonText='Continue with Google'
                  className="googel-login-inner"
                /> */}
                            </div>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="forgot-password"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
