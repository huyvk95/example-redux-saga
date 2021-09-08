import { useDispatch, useSelector } from "react-redux";

const Status = () => {
  const error = useSelector((state) => state.user.error);

  return <div>{error && <div>{error}</div>}</div>;
};

const Extra = (props) => {
  const dispatch = useDispatch();

  const onClickLogin = () => {
    console.log("On click login");
    dispatch({
      type: "USER_FETCH_REQUESTED",
      payload: { id: 0 },
    });
  };

  const onClickLoginFailed = () => {
    console.log("On click login failed");
    dispatch({
      type: "USER_FETCH_REQUESTED",
      payload: { id: 1 },
    });
  };

  return (
    <div>
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLoginFailed}>Login failed</button>
    </div>
  );
};

const App = () => {
  const user = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.app.loading);

  if (loading) return <div>...Loading</div>;

  return (
    <div>
      <Status />
      <div>{user?.name || "User not login"}</div>
      <Extra />
    </div>
  );
};

export default App;
