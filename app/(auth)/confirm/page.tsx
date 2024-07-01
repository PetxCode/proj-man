// "use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { verifyPayment } from "../register/[reg]/action";

const page = async () => {
  // to9k0wstx6

  //   const getURL = useSearchParams();

  //   const dataValue = getURL.get("reference");

  //   console.log(dataValue);

  await verifyPayment("to9k0wstx6").then((res: any) => {
    console.log(res);
  });

  const signInUser = (data: FormData) => {
    "use server";
    const email = data.get("email");
    const password = data.get("password");
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Account Confirmation Screen</div>

        <div className="my-10">
          <hr />
        </div>

        <form action={signInUser}>
          <div className="flex flex-col mb-4">
            This is to Confirm your Account Registration is Completed
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Go to Sign in Screen
          </button>
        </form>

        <div className="text-[12px] my-4 text-center  ">
          Don't have an Account{" "}
        </div>

        <div className="my-3">
          <hr />
        </div>

        <div>
          <p className="text-[12px] font-bold">
            Register through your Social Account
          </p>

          <div className="flex items-center gap-2">
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-red-600 hover:bg-red-500 duration-300  rounded-md text-[35px]">
              <FaGoogle />
            </button>
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-neutral-800 hover:bg-neutral-900 rounded-md text-[35px]">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
