import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:charyyevsylap@gmail.com?subject=${formData.subject}&body=${formData.message}. ${formData.name} (${formData.email})`
  };
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 ml-3 uppercase tracking-[15px] xl:tracking-[20px] text-[#808080] text-xl lg:text-2xl animate-pulse">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 pt-0 lg:pt-24">
        <h4 className="text-xl lg:text-4xl font-semibold text-center">
          I have got just you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>

        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 lg:h-6 lg:w-6 animate-pulse" />
            <p className="text-lg lg:text-xl">+90 555 001 04 11</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 lg:h-6 lg:w-6 animate-pulse" />
            <p className="text-lg lg:text-xl">charyyevsylap@gmail.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 lg:h-6 lg:w-6 animate-pulse" />
            <p className="text-lg lg:text-xl">Merkez, Kırklareli</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-fit space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-7 lg:py-5 lg:px-10 rounded-md text-black font-bold text-lg hover:bg-transparent hover:border hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
