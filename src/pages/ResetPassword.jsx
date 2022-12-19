import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

import Header from "../partials/Header";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const resetPassword = async () => {
    event.preventDefault();
    if (formError) setFormError("");

    if (!email.includes("@")) {
      return setFormError("Please enter a valid email");
    }

    setSuccess(false);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      alert(error.message);
    }
    setSuccess(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Let’s get your account back</h1>
                <p className="text-xl text-gray-600">
                  Enter the email you used when you signed up for your account,
                  and we’ll email you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email"
                        required
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-red-500 text-center mt-6">
                    {formError}
                  </div>

                  {success ? (
                    <div className="text-green-500 text-center mt-6">
                      Reset link has been sent. Check your email!
                    </div>
                  ) : (
                    " "
                  )}

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        onClick={resetPassword}
                      >
                        Send reset link
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600 text-center mt-6">
                    Want to go back?{" "}
                    <Link
                      to="/signin"
                      className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                    >
                      Sign in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResetPassword;
