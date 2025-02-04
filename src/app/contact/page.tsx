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
          <div className="text-indigo-500 font-bold text-xl py-4">
            Get in touch
          </div>
          <div className="text-sm text-gray-500 py-4">
            Thanks for stopping by! Whether you have a question, comment or just
            want to say hi.
          </div>
          <div className="text-sm text-gray-500 pb-6">
            Drop a line or use the contact form to get in touch.
          </div>
          <div className="">
            <div className="font-bold text-indigo-400">Send an email</div>
            <div className="text-xs text-gray-500 py-1">
              kaveeshafernando3@gmail.com
            </div>
          </div>
          <div className="">
            <div className="font-bold text-indigo-400">Give a call</div>
            <div className="text-xs text-gray-500 py-1">+94 716945834</div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input bg-gray-50 p-4 rounded-lg text-xs"
              />
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input bg-gray-50 p-4 rounded-lg text-xs "
              />
            </div>
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="input bg-gray-50 rounded-lg text-xs my-4 p-4 resize-none"
            />
            <button className="p-4 text-sm font-bold bg-indigo-400 rounded-lg text-white hover:bg-indigo-100 hover:text-indigo-400 border border-indigo-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
