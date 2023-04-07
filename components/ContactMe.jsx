import React from "react";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function ContactMe() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    // window.location.href = `mailto:manjunathnaik3923@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.message}
    // (${formData.email})`;
    console.log(formData)
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just got what you need,{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">manjunathnaik@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">Mangalore</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput px-2"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput px-2"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput px-2"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput px-2"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 text-black font-bold text-lg rounded-full"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
