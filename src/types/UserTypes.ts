import { TaskTypes } from '.';

interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tasks?: TaskTypes[];
}
export default UserType;
