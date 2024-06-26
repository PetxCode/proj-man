import { Document } from "mongoose";

export interface iCompany {
  companyName: string;
  email: string;
  role: string;
  logo: string;
  password: string;
  address: string;
  staff: {}[];
  projects: {}[];
}

export interface iCompanyData extends iCompany, Document {}

export interface iStaff {
  companyName: string;
  email: string;
  role: string;
  avatar: string;
  password: string;
  address: string;
  steps: {}[];
}

export interface iStaffData extends iStaff, Document {}

export interface iProject {
  title: string;
  dueDate: Date;
  assigned: string;
  task: {}[];
}

export interface iProjectData extends iProject, Document {}

export interface iTask {
  title: string;
  steps: {}[];
}

export interface iTaskData extends iTask, Document {}

export interface iStep {
  title: string;
}

export interface iStepData extends iStep, Document {}
