import { dbConfig } from "@/utils/dbConfig";
import companyData from "@/utils/model/company";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import projectData from "@/utils/model/projectModel";
import { URL } from "@/utils/constant";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { projectID } = params;

    await dbConfig();

    const company = await projectData.findById(projectID).populate({
      path: "task",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });

    console.log(company);

    return NextResponse.json({
      message: "Getting project's task",
      data: company,
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting project's task I",
      error: error.message,
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { projectID } = params;

    const { title, dueDate, staffName } = await req.json();

    const readProject = await projectData.findById(projectID);

    const readData = await fetch(
      `${URL}/api/register/${readProject.companyID}`
    ).then((res) => {
      return res.json();
    });

    console.log(readData.data.staff);

    if ("") {
      // const task = await taskData.create({
      //   title,
      //   dueDate,
      // });

      // await project.task.push(new Types.ObjectId(project._id));
      // project.save();

      return NextResponse.json({
        message: "project's project created",
        // data: task,
        status: 201,
      });
    } else {
      return NextResponse.json({
        message: "Error getting company",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting companies",
      error: error.message,
      status: 404,
    });
  }
};
