import TaskType from './TaskType';

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  consfirmPassword?: string;
  tasks?: TaskType[];
};

export default UserType;
