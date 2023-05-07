import TaskType from './TaskType';

type LogedUserType = {
  email: string;
  password: string;
  remember?: boolean;
  tasks: TaskType[];
};

export default LogedUserType;
