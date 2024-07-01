import { URL } from "@/utils/constant";
import Image from "next/image";
import React, { FC } from "react";

interface iComp {
  id: any;
}

const TeamMember: FC<iComp> = async ({ id }) => {
  const res = await fetch(`${URL}/api/register/${id}`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["team"],
    },
  });

  const data: any = await res.json();

  const staff = data.data.staff;
  return (
    <div>
      <div className="flex -space-x-4">
        {staff?.map((props: any) => (
          <div>
            {props?.avatar ? (
              <Image
                src={props?.avatar}
                alt="Pix"
                width={1000}
                height={1000}
                className="w-10 h-10 border-blue-950 border rounded-full bg-slate-100 object-cover"
              />
            ) : (
              <div className="w-10 h-10 border-blue-950 border rounded-full bg-slate-100 object-cover flex justify-center items-center text-[20px] font-bold ">
                {props?.staffName?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          //   <div className="w-[30px] h-[30px] rounded-full border flex justify-center items-center">
          //     D
          //   </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
