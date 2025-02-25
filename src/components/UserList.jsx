import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slice/userSlice";
import cssmodule from "./button.module.css";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((store) => store.users);
  return (
    <section>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className={cssmodule.primary}>Redux Toolkit Thunk </h1>
        <button
          onClick={() => dispatch(fetchUsers())}
          className="px-6 py-2 rounded-lg bg-amber-400 cursor-pointer"
        >
          Loading Data using RTK Thunk
        </button>
      </div>
      {loading && <div>...Loading</div>}
      {error && <div>{error}</div>}
      {!!users && (
        <ul>
          {users.map((item) => (
            <li key={item.id} className={cssmodule.secondary}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserList;
