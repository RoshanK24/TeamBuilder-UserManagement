import React, { useState } from "react";
import AddUser from "../Adduser";
import { useDispatch, useSelector } from "react-redux";
import addUser from "/addUser.svg";

const Navbar = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [showSearchUser, setShowSearchUser] = useState([]);

  const dispatch = useDispatch();
  const myTeam = useSelector((state) => state.myTeam);
  const allUsers = useSelector((state) => state.users);
  // console.log(allUsers);

  const searchHandle = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
    const name = e.target.value;
    if (!name.trim()) setShowSearchUser([]);
    else {
      const searchUsers = allUsers.filter((user) =>
        (user.first_name + " " + user.last_name)
          .toLowerCase()
          .includes(name.trim().toLowerCase())
      );
      setShowSearchUser(searchUsers);
    }
  };
  return (
    <>
      {showAdd ? (
        <>
          <AddUser setShowAdd={setShowAdd} />
        </>
      ) : (
        <></>
      )}
      <div className="absolute max-h-[10rem] w-[12.3rem] top-[2.9rem] right-[7.2rem]  z-10 bg-white transform -translate-y-[0rem] rounded-md overflow-auto">
        {showSearchUser.map((user) => (
          <div
            className="py-1 px-2 w-full text-gray-500  flex gap-2 items-center"
            key={user.id}
          >
            <div className="bg-gray-700 rounded-full p-[1px] ">
              <img src={user.avatar} alt="avatar" className="w-7"></img>
            </div>
            <div className="text-xs font-semibold">
              {user.first_name + " " + user.last_name}
            </div>
          </div>
        ))}
      </div>
      <nav className="bg-purple-500 h-14 opacity-90 flex items-center justify-between">
        <div
          className="ms-5 font-semibold cursor-pointer"
          onClick={() => setShowAdd(true)}
        >
          <img src={addUser} alt="edit" className="h-7" />
        </div>
        <div className="">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchName}
              className="ml-auto mr-2 px-2 py-1 rounded-md border border-gray-300 focus:outline-none"
              onChange={searchHandle}
            />
            <div className=" py-[0.35rem] px-6 bg-sky-500 rounded-xl font-semibold mr-2 hover:bg-sky-400 border border-gray-700 cursor-pointer">
              Search
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
