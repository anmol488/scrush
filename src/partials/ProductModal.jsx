import { Dialog, Transition } from "@headlessui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { Fragment, useState } from "react";
import { db } from "../../firebase";

export default function ProductModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productSocial, setProductSocial] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    event.preventDefault();
    if (formError) setFormError("");

    if (!email.includes("@")) {
      return setFormError("Please enter a valid email");
    }

    if (!productSocial.includes(".com")) {
      return setFormError("Please enter accepted URLs");
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "products"), {
        name: name,
        email: email,
        productName: productName,
        productDesc: productDesc,
        productSocialLink: productSocial,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
    location.reload();
  };

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
        >
          Add Product
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="max-w-sm mx-auto">
                    <form autoComplete="off">
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-800 text-sm font-medium mb-1"
                            htmlFor="name"
                          >
                            Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="form-input w-full text-gray-800"
                            placeholder="Enter your full name"
                            required
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                          />
                        </div>
                      </div>
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
                            placeholder="Enter your contact email"
                            required
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-800 text-sm font-medium mb-1"
                            htmlFor="product-name"
                          >
                            Product Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="product-name"
                            type="text"
                            className="form-input w-full text-gray-800"
                            placeholder="Enter your product's name"
                            required
                            onChange={(event) => {
                              setProductName(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-800 text-sm font-medium mb-1"
                            htmlFor="product-desc"
                          >
                            Product Description{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="product-desc"
                            type="text"
                            className="form-input w-full text-gray-800"
                            placeholder="What is your product about?"
                            required
                            onChange={(event) => {
                              setProductDesc(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-800 text-sm font-medium mb-1"
                            htmlFor="product-social"
                          >
                            Product Social{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="product-social"
                            type="text"
                            className="form-input w-full text-gray-800"
                            placeholder="Paste your product's social links"
                            required
                            onChange={(event) => {
                              setProductSocial(event.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="text-red-500 text-center mt-6">
                        {formError}
                      </div>

                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <button
                            type="submit"
                            className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                            onClick={submit}
                          >
                            {loading ? "Loading" : "Submit"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
