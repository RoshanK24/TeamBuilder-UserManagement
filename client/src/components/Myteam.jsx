import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const Myteam = ({ setShowEdit, setEditUser, setShowMyTeam }) => {
  const dispatch = useDispatch();
  const myTeam = useSelector((state) => state.myTeam);
  console.log(myTeam);

  return (
    <div className="absolute h-screen w-full flex justify-center items-center z-10 bg-white bg-opacity-60 transform -translate-y-[3.5rem]">
      <div className="bg-white rounded-lg shadow-xl transform -translate-y-8 h-[35rem] w-[44rem]">
        <span
          className="absolute top-3 right-8 font-extrabold cursor-pointer text-xl"
          onClick={() => {
            setShowMyTeam(false);
          }}
        >
          &#10005;
        </span>
        <p className="text-4xl ms-10 mt-5">My Team</p>
        <div className="w-full flex justify-center items-center">
          {myTeam.length === 0 ? (
            <p className="text-6xl text-gray-300 mt-40">No Team</p>
          ) : (
            <div className="flex flex-wrap overflow-auto h-[30rem] w-full justify-center">
              {myTeam.map((user) => (
                <Card
                  user={user}
                  setShowEdit={setShowEdit}
                  setEditUser={setEditUser}
                  key={user.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myteam;
