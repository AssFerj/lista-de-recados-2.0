import TaskType from './TaskType';

type LogedUserType = {
  userId?: string;
  email: string;
  password: string;
  remember?: boolean;
  tasks: TaskType[];
};

export default LogedUserType;
