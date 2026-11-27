import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startedDate: number;
  completedDate: number | null;
  interruptedDate: number | null;
  type: keyof TaskStateModel["config"];
};