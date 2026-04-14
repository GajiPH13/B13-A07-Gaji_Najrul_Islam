import React, { use } from "react";
import { useParams } from "react-router";
import BellSimpleZ from "../../assets/BellSimpleZ.png";
import Archive from "../../assets/Archive.png";
import Trash from "../../assets/Trash.png";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";


// const booksPromise = fetch("/booksData.json").then((res) => res.json());
const friendsDetailPromis = fetch("/friends.json").then((res) => res.json());
console.log(friendsDetailPromis);

const FriendsDetails = () => {
  const friendsDetailData = use(friendsDetailPromis);
  console.log(friendsDetailData);
  const { friendId } = useParams();
  console.log(friendId);
  const expectedFriends = friendsDetailData.find(
    (friend) => friend.id == friendId,
  );
  console.log(expectedFriends);

  const {
    next_due_date,
    goal,
    bio,
    tags,
    status,
    days_since_contact,
    email,
    picture,
    name,
  } = expectedFriends;

  return (
    <div className="grid grid-cols-[1fr_2fr]  gap-3 px-61  py-20 bg-gray-50">
      <div className="max-w-87">left
        <div>
          <div className="card bg-white shadow-sm">
            <figure className="pt-5">
              <img
                src={picture}
                alt="friends"
                className="w-25 h-25 rounded-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <div className="badge bg-[#CBFADB] text-[#244D3F] ">
                <p>{status}</p>
              </div>
              <div className="flex gap-2">
                <div className="badge bg-[#CBFADB] text-[#244D3F] ">
                  {tags[0]}
                </div>
                <div className="badge bg-[#CBFADB] text-[#244D3F] ">
                  {tags[1]}
                </div>
              </div>
              <p>"{bio}"</p>
              <p>Prefered:{email}</p>
            </div>
          </div>
        </div>
        {/* left bottom */}
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-2 p-4 mt-4 font-medium text-[#1F2937] shadow-sm bg-white rounded-lg">
            <img src={BellSimpleZ} alt="Bell Icon" />
            <p>Snooze 2 weeks</p>
          </div>
          <div className="flex justify-center items-center gap-2  p-4 font-medium text-[#1F2937] shadow-sm bg-white rounded-lg">
            <img src={Archive} alt="Bell Icon" />
            <p>Archive</p>
          </div>
          <div className="flex justify-center items-center gap-2  p-4 font-medium text-red-500 shadow-sm bg-white rounded-lg">
            <img src={Trash} alt="Bell Icon" />
            <p> Delete</p>
          </div>
        </div>
      </div>
      <div className="">right
        <div className="flex justify-start text-center  gap-3">
            <div className="bg-white px-4 py-8 shadow-sm rounded-lg">
                <p className="font-semibold text-3xl text-[#244D3F]">{days_since_contact}</p>
                <p>Days Since Contact</p>
            </div>
            <div className="bg-white px-12 py-8 shadow-sm rounded-lg">
                <p className="font-semibold text-3xl text-[#244D3F]">{goal}</p>
                <p>Goal (Days)</p>
            </div>
            <div className="bg-white px-4 py-8 shadow-sm rounded-lg">
                <p className="font-semibold text-3xl text-[#244D3F]">{next_due_date}</p>
                <p>Next Due</p>
            </div>
            
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm space-y-4 my-4">
            <div className="flex justify-between">
                <h2 className="text-2xl font-medium  text-[#244D3F]">Relationship Goal</h2>
                <button className="btn btn-ghost">Edit</button>
            </div>
            <p className="text-left">Connect every 30 days</p>
        </div>
       <div className="p-6 bg-white rounded-lg">
         <p className="font-medium text-2xl text-[#244D3F] mb-3">Quick Check-In</p>
         <div className=" flex justify-between gap-3 ">
           
            <button className="btn w-56 h-30 flex flex-col gap-2 items-center p-4 bg-gray-50">
                <img  src={Call} alt="" className="w-8 h-8 object-cover" />
                <p>Call</p>
            </button>
            <button className="btn w-56 h-30 w-56 flex flex-col gap-2 items-center p-4 bg-gray-50">
                <img  src={Text} alt="" className="w-8 h-8 object-cover" />
                <p>Call</p>
            </button>
            <button className="btn w-56 h-30 w-56 flex flex-col gap-2 items-center p-4 bg-gray-50">
                <img  src={Video} alt="" className="w-8 h-8 object-cover" />
                <p>Call</p>
            </button>
            

        </div>
       </div>

      </div>
    </div>
  );
};

export default FriendsDetails;
