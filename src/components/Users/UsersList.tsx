import type { User } from "../../types";
import UsersListItem from "./UserListItem";

const users: Array<User> = Array.from({ length: 10 }, () => ({
  id: crypto.randomUUID(),
  email: "f",
  status: "Active",
  phone: 22,
  name: "Bob",
}));

export const UsersList = () => {
  return (
    <section>
      <h1>UsersList</h1>
      <ul>
        {users &&
          users.map((item) => <UsersListItem key={item.id} {...item} />)}
      </ul>
    </section>
  );
};
