import Banner from "@/Components/Banner";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { getLocaleForRoute, routeWithLocale } from "@/Utils/localeHelper";
import { Head, Link, useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { t, tChoice, currentLocale, setLocale, getLocales, isLocale } = useLaravelReactI18n();
    const currentLang = currentLocale();
    // const currentLang = getLocaleForRoute(lang);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(routeWithLocale("register", currentLang), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <Banner title="Register" />
            <div className="register-page">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="login-img">
                            <img
                                src="https://scoliolife.com/uploads/2023/05/login-bg-600x587-1.webp"
                                alt=""
                            />
                            <div className="side-btn">
                                <Link
                                    href={routeWithLocale("login", currentLang)}
                                    className={
                                        route().current("login") || route().current("localized.login")
                                            ? "login"
                                            : "register"
                                    }
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={routeWithLocale("register", currentLang)}
                                    className={
                                        route().current("register") || route().current("localized.register")
                                            ? "login"
                                            : "register"
                                    }
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
