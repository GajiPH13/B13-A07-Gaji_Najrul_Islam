import React, { use, useState } from "react";
import { useParams } from "react-router";
import BellSimpleZ from "../../assets/BellSimpleZ.png";
import Archive from "../../assets/Archive.png";
import Trash from "../../assets/Trash.png";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";
import { useContext } from "react";
import { LogContext } from "../../context/FriendsContext";
import { toast } from 'react-toastify';

// const booksPromise = fetch("/booksData.json").then((res) => res.json());
const friendsDetailPromis = fetch("/friends.json").then((res) => res.json());
console.log(friendsDetailPromis);

const FriendsDetails = () => {
  const friendsDetailData = use(friendsDetailPromis);
  // console.log(friendsDetailData);
  const { friendId } = useParams();
  // console.log(friendId);
  const expectedFriends = friendsDetailData.find(
    (friend) => friend.id == friendId,
  );
  // console.log(expectedFriends);

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

  const {handelHistoryLog,log} = useContext(LogContext);
  console.log(handelHistoryLog,log);

  // const handleToast = (e)=>{
  //  if(e.innerHtml == 'Call')
  //   toast(`Call to ${name}`);
  // }
  const handleToast = (action) => {
  switch (action) {
    case "Call":
      toast(`Calling ${name}...`);
      break;
    case "Text":
      toast(`Sending a text to ${name}...`);
      break;
    case "Video":
      toast(`Starting a video call with ${name}...`);
      break;
    default:
      toast(`Action with ${name}`);
  }
};
  // const handelText = (friendText) =>{
  // // console.log('friendsId',friendId)
  // const textList =call.find((friend) => friend.friendId === friendText.friendId);
  // setCall([...call, friendText])
  // // console.log('From text',textList)
  // }
  // const handelVideo = (friendVideo) =>{
  // // console.log('friendsId',friendId)
  // const videoList =call.find((friend) => friend.friendId === friendVideo.friendId);
  // setCall([...call, friendVideo])
  // console.log('From video',videoList)
  // }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 
    px-4 sm:px-6 md:px-8 lg:px-61 py-10 sm:py-14 md:py-20 bg-gray-50">
      {/* left */}
      <div className="with-full">
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
              <div
                className={`badge  
        ${
          status == "overdue"
            ? "bg-[#EF4444] text-white"
            : status == "almost due"
              ? "bg-[#EFAD44] text-white"
              : status == "on-track"
                ? "bg-[#244D3F] text-white"
                : "bg-ghost"
        }`}
              >
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
              <p className="line-clamp-2">"{bio}"</p>
              <p>Prefered:{email}</p>
            </div>
          </div>
        </div>
        {/* left bottom */}
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-2 p-4 mt-4 font-medium
           text-[#1F2937] shadow-sm bg-white rounded-lg">
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

      {/* right */}
      <div className="">
        <div className="flex justify-between text-center  gap-3">
          <div className="bg-white px-12 py-10 shadow-sm rounded-lg">
            <p className="font-semibold text-3xl text-[#244D3F]">
              {days_since_contact}
            </p>
            <p>Days Since Contact</p>
          </div>
          <div className="bg-white px-20 py-10 shadow-sm rounded-lg">
            <p className="font-semibold text-3xl text-[#244D3F]">{goal}</p>
            <p>Goal (Days)</p>
          </div>
          <div className="bg-white px-10 py-10 shadow-sm rounded-lg">
            <p className="font-semibold text-3xl text-[#244D3F]">
              {next_due_date}
            </p>
            <p>Next Due</p>
          </div>
        </div>
        <div className="px-6 py-11.5 bg-white rounded-lg shadow-sm space-y-4 my-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium  text-[#244D3F]">
              Relationship Goal
            </h2>
            <button className="btn btn-ghost">Edit</button>
          </div>
          <p className="text-left">Connect every 30 days</p>
        </div>
        <div className="px-6 py-3 bg-white rounded-lg">
          <p className="font-medium text-2xl text-[#244D3F] mb-3">
            Quick Check-In
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3">
            <button
              onClick={() =>(handleToast('Call'), handelHistoryLog(expectedFriends, "Call"))}
              className="btn w-full md:w-56 h-30 flex flex-col gap-2 items-center p-4 bg-gray-50"
            >
              <img src={Call} alt="" className="w-8 h-8 object-cover" />
              <p>Call</p>
            </button>
            <button
              onClick={() =>(handleToast('Text'), handelHistoryLog(expectedFriends, "Text"))}
              className="btn w-full md:w-56 h-30  flex flex-col gap-2 items-center p-4 bg-gray-50"
            >
              <img src={Text} alt="" className="w-8 h-8 object-cover" />
              <p>Text</p>
            </button>
            <button
              onClick={() =>(handleToast('Video'), handelHistoryLog(expectedFriends, "Video"))}
              className="btn w-full h-30 md:w-56 flex flex-col gap-2 items-center p-4 bg-gray-50"
            >
              <img src={Video} alt="" className="w-8 h-8 object-cover" />
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
