import { Schema, Types, model, models } from "mongoose";
import { iTaskData } from "../interface";

const taskModel = new Schema<iTaskData>(
  {
    title: {
      type: String,
    },
    assigned: {
      type: String,
    },

    companyID: {
      type: String,
    },

    step: [
      {
        type: Types.ObjectId,
        ref: "Steps",
      },
    ],

    project: {
      type: Types.ObjectId,
      ref: "Projects",
    },
  },
  { timestamps: true }
);

const taskData = models.tasks || model<iTaskData>("tasks", taskModel);

export default taskData;
