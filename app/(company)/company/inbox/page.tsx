import { options } from "@/app/api/auth/[...nextauth]/options";
import { URL } from "@/utils/constant";
import moment from "moment";
import { getServerSession } from "next-auth";
import React from "react";
import TeamMember from "./TeamMember";
import Link from "next/link";

const page = async () => {
  const session: any = await getServerSession(options);

  const res = await fetch(`${URL}/api/project/${session?.user?.id}`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["project"],
    },
  });

  const data: any = await res.json();

  return (
    <div>
      <div className="text-[12px] font-semibold my-6 flex items-center justify-between">
        <div>This is All My Project Screen</div>

        <TeamMember id={session?.user?.id} />
      </div>

      <div>
        <div>
          {data?.data?.projects?.map((el: any) => (
            <Link
              key={el._id}
              href={`/company/inbox/${el._id}`}
              className="flex-col flex w-full border my-2 rounded-md p-4 shadow-sm"
            >
              <p className="font-bold text-[16px] uppercase">{el.title}</p>

              <div className="text-[12px] mt-2 font-medium">
                <span className="font-semibold text-red-500">Due-Date:</span>{" "}
                {moment(el.dueDate).format("lll")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
