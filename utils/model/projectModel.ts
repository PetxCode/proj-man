import { Schema, Types, model, models } from "mongoose";
import { iProjectData } from "../interface";

const projectModel = new Schema<iProjectData>(
  {
    title: {
      type: String,
    },
    dueDate: {
      type: String,
    },

    companyID: {
      type: String,
    },

    task: [
      {
        type: Types.ObjectId,
        ref: "tasks",
      },
    ],

    company: {
      type: Types.ObjectId,
      ref: "companies",
    },
  },
  { timestamps: true }
);

const projectData =
  models.projects || model<iProjectData>("projects", projectModel);

export default projectData;
