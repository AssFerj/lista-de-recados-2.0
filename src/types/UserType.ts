import { TasksTypes } from '.';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks?: TasksTypes[];
}
export default UserType;
