import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  stateDispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  stateDispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
