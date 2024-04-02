import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "../store/slices/usersSlice";
import { storePageUser } from "../store/slices/pageUserSlice";

const Sidebar = ({ getUsers, setShowPagination, setShowMyTeam }) => {
  const [filters, setFilters] = useState({
    domain: "",
    gender: "",
    available: "",
  });

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    if (
      filters.domain === "" &&
      filters.gender === "" &&
      filters.available === ""
    ) {
      getUsers();
      setShowPagination(true);
    } else {
      const filteredUsers = allUsers.filter((user) => {
        return (
          (filters.domain === "" ||
            user.domain.toLowerCase() === filters.domain.toLowerCase()) &&
          (filters.gender === "" ||
            user.gender.toLowerCase() === filters.gender.toLowerCase()) &&
          (filters.available === "" ||
            user.available.toString() === filters.available)
        );
      });
      dispatch(storePageUser(filteredUsers));
      setShowPagination(false);
    }
  }, [filters]);

  const uniqueDomains = [...new Set(allUsers.map((user) => user.domain))];

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold ms-2 mt-4 mb-2"> Filter Users</h2>
      <div className="rounded-lg w-[16.5rem] p-2 pt-3 ps-3 bg-purple-300">
        <div>
          <label className="ms-1 font-medium">
            Domain:
            <select
              name="domain"
              value={filters.domain}
              onChange={handleChange}
              className="w-60 mb-3 mt-1 outline-none pt-[0.4rem] pb-2 ps-4 bg-right text-black rounded-md shadow-md cursor-pointer"
            >
              <option value="">Select Domain</option>
              {uniqueDomains?.map((domain, index) => (
                <option key={index} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label className="ms-1 font-medium">
            Gender:
            <select
              name="gender"
              value={filters.gender}
              onChange={handleChange}
              className=" w-60 mb-3 mt-1 outline-none pt-[0.4rem] pb-2 ps-4 bg-right text-black rounded-md shadow-md cursor-pointer"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label className="ms-1 font-medium">
            Available:
            <select
              name="available"
              value={filters.available}
              onChange={handleChange}
              className="w-60 mb-3 mt-1 outline-none pt-[0.4rem] pb-2 ps-4 bg-right text-black rounded-md shadow-md cursor-pointer"
            >
              <option value="">Select Availability</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </div>
      </div>
      <div className="mt-4 bg-purple-400 text-lg px-4 py-1.5 rounded-lg text-center font-semibold text-gray-700 cursor-pointer hover:bg-purple-300" onClick={()=>{setShowMyTeam(true)}}>
        Show My Team
      </div>
    </div>
  );
};

export default Sidebar;
