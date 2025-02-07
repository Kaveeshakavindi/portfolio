"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sendEmail from "@/utils/send-email";
import "../globals.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const page = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }
  return (
    <div className="flex flex-col  p-[2rem] p-4 rounded-3xl m-4 bg-white ">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="text-blue-500 font-bold text-3xl py-4">
            Get in touch
          </div>
          <div className="text-md text-gray-500 py-4">
            Thanks for stopping by! Whether you have a question, comment or just
            want to say hi.
          </div>
          <div className="text-md text-gray-500 pb-6">
            Drop a line or use the contact form to get in touch.
          </div>
          <div className="">
            <div className="font-bold text-blue-500">Send an email</div>
            <div className="text-md text-gray-500 py-1">
              kaveeshafernando3@gmail.com
            </div>
          </div>
          <div className="">
            <div className="font-bold text-blue-500">Give a call</div>
            <div className="text-md text-gray-500 py-1">+94 716945834</div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 w-full flex flex-col"
          >
            <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-4">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input bg-gray-50 p-4 rounded-lg text-md"
              />
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input bg-gray-50 p-4 rounded-lg text-md "
              />
            </div>
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="input bg-gray-50 rounded-lg text-md my-4 p-4 resize-none"
            />
            <button className="p-4 text-md font-bold bg-blue-500 rounded-lg text-white hover:bg-blue-100 hover:text-blue-400 border border-blue-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
