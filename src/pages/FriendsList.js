import axios from "axios";
import { useState, useEffect } from "react";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        console.log("friends res", res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.error("friends err", err);
      });
  }, []);
  return (
    <>
      <h2>FRIEND LIST</h2>
      <ul>
        {friends.map((friend) => {
          <li>
            -{friend.name}-{friend.email}
          </li>;
        })}
      </ul>
    </>
  );
};
export default FriendsList;
