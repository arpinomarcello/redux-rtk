import { useUsersQuery } from "./services/usersApi";
import { User } from "./models/user.model";
import logo from "./logo.svg";
type Props = {};

const UserList = (props: Props) => {
  const { data, isError, isLoading, isSuccess } = useUsersQuery();
  return (
    <>
      {isLoading && <img src={logo} className="App-logo" alt="logo" />}
      {isError && "ops...si è verificato un errore"}
      {isSuccess && (
        <div>
          User List:
          {data?.map((el: User) => {
            return <div key={el.id}>{el.name}</div>;
          })}
        </div>
      )}
    </>
  );
};

export default UserList;
