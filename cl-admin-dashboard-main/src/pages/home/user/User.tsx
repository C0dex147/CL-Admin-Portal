import { Single } from "../../../components/single/Single";
import { singleUser } from "../../../data";
import "./user.scss";

export const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};
