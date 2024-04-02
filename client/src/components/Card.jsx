import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePageUser, storePageUser } from "./store/slices/pageUserSlice";
import edit from "/edit.svg";
import { addTeam, deleteTeam } from "../components/store/slices/teamSlice";

const Card = ({ user, setShowEdit, setEditUser, getUsers }) => {
  const dispatch = useDispatch();
  const myTeam = useSelector((state) => state.myTeam);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8040/api/v1/users/${user.id}`);
      dispatch(deletePageUser(user.Id));
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const teamHandle = () => {
    if (!myTeam.some((team) => team.id === user.id)) {
      dispatch(addTeam(user));
    } else {
      dispatch(deleteTeam(user.id));
    }
  };

  return (
    <div className="h-fit w-72 rounded-xl overflow-hidden shadow-lg bg-purple-400 m-3 relative z-0">
      <span
        className="absolute right-4 top-3 text-xl cursor-pointer"
        onClick={() => {
          setShowEdit(true);
          setEditUser(user);
        }}
      >
        <img src={edit} alt="edit" className="h-6" />
      </span>
      <div className="px-3 py-4 pe-2 mt-1">
        <div className="flex items-center">
          <img
            className="rounded-full h-[3.25rem] w-[3.25rem] object-cover"
            src={user.avatar}
            alt="avatar"
          ></img>
          <div className="font-bold text-xl pt-2">
            {user.first_name} {user.last_name}
          </div>
        </div>
      </div>
      <div className="px-5 py-4 pt-0 mt-1 bg-purple-100 rounded-xl pe-3">
        <div className="text-gray-700 text-[.85rem] ms-1  pt-5 font-semibold">
          <p className="text-[0.75rem] font-bold"> Email: {user.email} </p>
          <p> Gender: {user.gender}</p>
          <p> Domain: {user.domain}</p>
        </div>
        <div className="flex items-center mb-1 ms-1">
          <span
            className={`inline-block ${
              user.available ? "bg-green-500" : "bg-red-500"
            } cursor-default rounded-full mt-[0.15rem] px-2 py-2 text-sm font-semibold text-gray-700 mr-1`}
          >
            {" "}
          </span>
          <span className="text-[.85rem] font-semibold">
            {user.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="mb-3 ms-1 mt-2">
          <span
            className={`inline-block ${
              !myTeam.some((team) => team.id === user.id)
                ? "bg-blue-300"
                : "bg-red-400"
            } cursor-pointer rounded-2xl px-5 py-1 pb-1.5 text-sm font-semibold text-black`}
            onClick={teamHandle}
          >
            {!myTeam.some((team) => team.id === user.id)
              ? "Add to Team"
              : "Remove team"}
          </span>
          <span
            className={`cursor-pointer rounded-2xl px-7 py-1.5 pb-1.5 ms-2 bg-red-400 text-sm font-semibold text-black`}
            onClick={handleDelete}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
