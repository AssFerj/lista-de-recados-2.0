import TaskType from './TaskType';

type LogedUserType = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  remember?: boolean;
};

export default LogedUserType;
