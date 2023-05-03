import TaskType from './TaskType';

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  remember?: boolean;
  tasks: TaskType[];
};

export default UserType;
