const FriendsList = () => {
  const [friends, setFriends] = useState([]);
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
