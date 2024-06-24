"use client";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";
import useAuthApis from "@/lib/hooks/useAuthApis";
import { object, string } from "yup";
import { useState } from "react";

interface Values {
  email: string;
  password: string;
}

const RegisterPage = () => {
    const { registerApi } = useAuthApis();

  const registerSchema = object({
    username: string()
      .required("Username is required")
      .min(5, "Min 5 character")
      .max(50, "Max 50 character"),
    firstName: string()
      .required("Firstname is required")
      .min(5, "Min 5 character")
      .max(50, "Max 50 character"),
    lastName: string()
      .required("Lastname is required")
      .min(5, "Min 5 character")
      .max(50, "Max 50 character"),
    email: string()
      .required("Email is required")
      .email("Email not valid")
      .max(50, "Max 50 character"),
    password: string()
      .required("Password is required")
      .matches(/[a-z]/, "at least one lowercase letter")
      .matches(/[A-Z]/, "at least one uppercase letter")
      .matches(/\d+/, "at least one number")
      .matches(/[@$!%*?&]/, "at least one special character - [@$!%*?&]")
      .min(8, "Min 8 character")
      .max(50, "Max 50 character"),
  });

  const [passwordEye, setPasswordEye] = useState(true);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="text-2xl font-[700] text-amber-600 text-center">
          Stock App
        </h3>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          REGISTER
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(
              values: Values,
              { setSubmitting, resetForm }: FormikHelpers<Values>
            ) => {
              console.log(values);

                registerApi(values);

              resetForm();
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>

                {/*! ---------username---------- */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="my-2 relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2 mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    {touched.username && (
                      <p className="text-red-500 text-[10px] absolute -bottom-4">
                        {errors.username}
                      </p>
                    )}
                  </div>
                </div>


                {/*! --------firstname----------- */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Firstname
                  </label>
                  <div className="my-2 relative">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2 mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {touched.firstName && (
                      <p className="text-red-500 text-[10px] absolute -bottom-4">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                </div>



                {/*! --------lastname----------- */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lastname
                  </label>
                  <div className="my-2 relative">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2 mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {touched.lastName && (
                      <p className="text-red-500 text-[10px] absolute -bottom-4">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>






                {/*! ---------email---------- */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="my-2 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-2 mb-5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && (
                      <p className="text-red-500 text-[10px] absolute -bottom-4">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-amber-600 hover:text-amber-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="my-2 relative">
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={passwordEye ? "password" : "text"}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ps-2  mb-10"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span
                        className="absolute right-3 top-[10%] text-lg hover:text-orange-500 active:text-orange-700 transition-all cursor-pointer"
                        onClick={() => setPasswordEye(!passwordEye)}
                      >
                        ◎
                      </span>
                    </div>
                    {touched.password && (
                      <p className="text-red-500 text-[10px] absolute -bottom-8">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-600 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isSubmitting}
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Do you have a account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-amber-600 hover:text-amber-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
