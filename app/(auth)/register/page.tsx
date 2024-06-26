import Button from "@/app/components/Button";
import Link from "next/link";
import React from "react";
import { MdBeachAccess, MdStadium, MdStars } from "react-icons/md";

const page = () => {
  const data = [
    {
      id: 1,
      name: "Freemium",
      price: "Free",
      prof: "3 Staffs",
      benefits: ["VS Code", "NextJS", "Javascript"],
      URL: "/register/freemium",
    },
    {
      id: 2,
      name: "Starter",
      price: "500",
      prof: "10 Staffs",
      benefits: ["All Freemium", "VS Code", "NextJS", "Javascript"],
      URL: "/register/starter",
    },
    {
      id: 3,
      name: "Premium",
      price: "1000",
      prof: "Unlimited",
      benefits: ["All Starter", "VS Code", "NextJS", "Javascript"],
      URL: "/register/premium",
    },
  ];

  return (
    <div className="flex justify-center w-full items-center h-screen">
      <div className="flex gap-5">
        {data?.map((props: any, i: number) => (
          <div
            key={props.id}
            className="w-[300px] flex flex-col min-h-[500px] border rounded-md"
          >
            <div className="flex-1 ">
              <div className="flex w-full items-center mt-5 font-semibold uppercase flex-col">
                <div>{props.name} </div>
                <div>
                  {props.name !== "Freemium" && "₦"}
                  {props.price}
                </div>
              </div>

              <div className="mt-10 px-5">
                {props.benefits.map((props: string, i: number) => (
                  <p key={i} className="my-5">
                    &middot; {props}
                  </p>
                ))}
              </div>
            </div>
            <Link href={props.URL} className="flex w-full justify-center mb-6">
              <Button
                icon={
                  props.name === "Freemium" ? (
                    <MdStadium />
                  ) : props.name === "Starter" ? (
                    <MdStars />
                  ) : props.name === "Premium" ? (
                    <MdBeachAccess />
                  ) : null
                }
                className={`font-normal ${
                  props.name === "Freemium"
                    ? "bg-blue-950"
                    : props.name === "Starter"
                    ? "bg-red-500"
                    : props.name === "Premium"
                    ? "bg-green-500"
                    : null
                } `}
              >
                {props.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
