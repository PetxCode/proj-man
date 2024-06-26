import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import projectData from "@/utils/model/projectModel";
import { Types } from "mongoose";
import taskData from "@/utils/model/taskModel";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { taskID } = params;

    await dbConfig();

    const task = await taskData.findById(taskID).populate({
      path: "step",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });
    return NextResponse.json({
      message: "Getting company's project task",
      data: task,
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting companies",
      error: error.message,
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { projectID } = params;
    const { title, staffName } = await req.json();

    const project = await projectData.findById(projectID);
    console.log(project);

    if (project) {
      const task = await taskData.create({
        title,
        assigned: staffName,
      });

      await project.task.push(new Types.ObjectId(task._id));
      project.save();

      return NextResponse.json({
        message: "company's project created",
        data: task,
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
