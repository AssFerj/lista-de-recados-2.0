import { TasksTypes } from '.';

interface UserType {
  name: string;
  email: string;
  password: string;
  tasks?: TasksTypes[];
  isLogged?: boolean;
}
export default UserType;
