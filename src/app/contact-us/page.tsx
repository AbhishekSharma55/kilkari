"use client";
import React, { useState, FormEvent } from "react";
import { MapComponent } from "../../components/providers/google-map-api";
import { sendMail } from "@/lib/mail";
const initValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  message: "",
};

export default function Page() {
  const [values, setValues] = useState(initValues);
  const [submitted, setSubmitted] = useState(false); // State variable to track submission
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setValues((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true after successful form submission
    await sendMail({
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      message: values.message,
    });
  };

  return (
    <div className="p-10 lg:p-20">
      <div className="block md:flex items-center mt-20  ">
        <div className="p-2 pb-10 lg:p-10  lg:max-w-5xl">
          <div className="text-5xl pt-5">Contact Us __</div>
          <div className="text-2xl mt-10">
            If you have any questions or inquiries, please fill out the form
            below and we will get back to you as soon as possible.
          </div>
        </div>
        <div className="lg:block">
          <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
            {submitted && ( // Conditionally render message after form submission
              <div className="text-primary text-xl font-semibold mt-4">
                Thank you for reaching out to us. We will get back to you as soon as possible.
              </div>
            )}

            {!submitted && (
              <div>
                <div className="grid lg:grid-cols-2 lg:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={handleInput}
                      value={values.firstName}
                    />
                    <label
                      htmlFor="firstName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={handleInput}
                      value={values.lastName}
                    />
                    <label
                      htmlFor="lastName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      required
                      onChange={handleInput}
                      value={values.phoneNumber}
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    name="message"
                    id="message"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={handleInput}
                    value={values.message}
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="p-5 md:p-10">
        <h1 className="p-4 text-4xl">Our WorkPlace __</h1>
        <MapComponent apiKey="AIzaSyCFhEDNuglphpfWdZmblFNibEle7_Np_M0" />
      </div>

      <div className="lg:hidden p-5"></div>
    </div>
  );
}
