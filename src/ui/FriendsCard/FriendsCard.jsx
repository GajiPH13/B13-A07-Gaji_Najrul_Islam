import React from "react";
import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
//   console.log(friend);
  return (
    <Link to={`/friendsdetails/${friend.id}`} className="card bg-white shadow-sm">
      <figure className="pt-5">
        <img
          src={friend.picture}
          alt="friends"
          className="w-25 h-25 rounded-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p>{friend.days_since_contact}d ago</p>
        <div className="flex gap-2">
          <div className="badge bg-[#CBFADB] text-[#244D3F] ">
            {friend.tags[0]}
          </div>
          <div className="badge bg-[#CBFADB] text-[#244D3F] ">
            {friend.tags[1]}
          </div>
        </div>
        <div className="badge bg-[#CBFADB] text-[#244D3F] ">
            {friend.status}
          </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
