import { Schema, Types, model, models } from "mongoose";
import { iCompanyData } from "../interface";

const companyModel = new Schema<iCompanyData>(
  {
    companyName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    logo: {
      type: String,
    },
    plan: {
      type: String,
    },
    planCost: {
      type: Number,
    },
    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],
    projects: [
      {
        type: Types.ObjectId,
        ref: "projects",
      },
    ],
    task: {
      type: Types.ObjectId,
      ref: "tasks",
    },
  },
  { timestamps: true }
);

const companyData =
  models.companies || model<iCompanyData>("companies", companyModel);

export default companyData;
