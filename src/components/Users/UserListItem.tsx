import type { User } from "../../types";

const UsersListItem = ({ name, phone, status, email, id }: User) => {
  let isDeleting = false;

  const deleteUser = async (id: string) => Promise<void>;

  return (
    <li style={{ marginBottom: "20px" }}>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Phone: <strong>{phone}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        status <strong>{status ? "Active" : "Non-active"}</strong>
      </p>

      <button
        type="button"
        disabled={isDeleting}
        onClick={() => deleteUser(id)}
      >
        {isDeleting ? <div>Loading</div> : "Delete"}
      </button>
    </li>
  );
};

export default UsersListItem;
