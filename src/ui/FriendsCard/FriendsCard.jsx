import React from "react";
import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
//   console.log(friend);
  return (
    <Link to={`/friendsdetails/${friend.id}`} className="card bg-gray-50 shadow-sm">
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
        <div className={`badge  
        ${
          friend.status == 'overdue'? 'bg-[#EF4444] text-white':
          friend.status == 'almost due'? 'bg-[#EFAD44] text-white':
          friend.status == 'on-track'? 'bg-[#244D3F] text-white': 'bg-ghost'
        
        }`}>
            {friend.status}
          </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
