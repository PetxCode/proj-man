import { Schema, Types, model, models } from "mongoose";
import { iProjectData } from "../interface";

const projectModel = new Schema<iProjectData>(
  {
    title: {
      type: String,
    },
    dueDate: {
      type: Date,
    },

    task: [
      {
        type: Types.ObjectId,
        ref: "Tasks",
      },
    ],

    company: {
      type: Types.ObjectId,
      ref: "Companies",
    },
  },
  { timestamps: true }
);

const projectData =
  models.Companies || model<iProjectData>("Companies", projectModel);

export default projectData;
