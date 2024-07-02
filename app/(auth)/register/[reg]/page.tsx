"use client";
import { data } from "@/utils/data";
import Link from "next/link";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { makePayment } from "./action";
import { redirect } from "next/navigation";
import { ContextProvider } from "@/app/global/GlobalContext";

const page = ({ params }: any) => {
  const {
    setPlanCost,
    setCompanyName,
    setPlan,
    setPassword,
    setEmail,
    setReference,

    reference,
    companyName,
    password,
    email,
    plan,
    planCost,
  }: any = useContext(ContextProvider);

  const { reg } = params;
  const readData = data;

  const planValue = reg
    .toString()
    .charAt(0)
    .toUpperCase()
    .concat(reg.substring(1));

  let cost: any = readData.find((el) => {
    return el.name === planValue;
  });
  console.log(cost);

  setPlan(planValue);
  setPlanCost(parseInt(cost?.price));

  console.log("show this ref: ", reference);

  const createAccount = async (data: FormData) => {
    // "use server";
    const companyName = data.get("companyName") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await makePayment(email, cost?.price)
      .then((res: any) => {
        console.log("reading: ");
        console.log(res?.data?.data?.reference);
        console.log(res?.data?.data);
        setReference(res?.data?.data?.reference);
        setEmail(email);
        setPassword(password);
        setCompanyName(companyName);

        setPlan(planValue);
        setPlanCost(parseInt(cost?.price));
        // redirect(res?.data?.data?.authorization_url);
      })
      .finally(() => {
        console.log("ref: ", reference);
        console.log("email: ", email);
        console.log("planCost: ", planCost);
        console.log("password: ", password);
        console.log("companyName: ", companyName);
        console.log("planValue: ", plan);
      });

    // await fetch(`${URL}/api/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     companyName,
    //     email,
    //     password,
    //     plan,
    //     planCost: cost?.price === "Free" ? 0 : parseInt(cost?.price),
    //   }),
    // });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Register Screen for {planValue}</div>

        <div className="my-10">
          <hr />
        </div>

        <form action={createAccount}>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Display Name"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Register
          </button>
        </form>

        <div className="text-[12px] my-4 text-center  ">
          Already have an Account{" "}
          <Link href="/signin" className="italic font-semibold ">
            Sign in Here
          </Link>
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
