import React, { use } from "react";
import FriendsCard from "../../ui/FriendsCard/FriendsCard";

const friendsPromis = fetch("/friends.json").then((res) => res.json());
const AllFriends = () => {
  const friendsData = use(friendsPromis);
//   console.log(friendsData);
  return (
    <div className=" px-61 py-10 grid grid-cols-4 gap-4">
      {
        friendsData.map((friend) => {
            return <FriendsCard friend={friend} key={friend.id}></FriendsCard>
        }
      )}
    </div>
  );
};

export default AllFriends;
