import axios from "axios";
import React, { useState } from "react";


export const Updateuser = ({ setShowUpdate, user }) => {
  const [userData, setUserData] = useState({
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    avatar: user.avatar,
    gender: user.gender,
    domain: user.domain,
    available: user.available,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData);
      const { data } = await axios.put(
        `http://localhost:8040/api/v1/users/${user.id}`,
        userData
      );

      if (data?.success) {
        setShowUpdate(false);
        setUserData({
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          avatar: "",
          gender: "",
          domain: "",
          available: "",
        });
      } else {
        window.alert(data?.message);
      }
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong");
    }
  };

  return (
    <div className="absolute h-screen w-full flex justify-center items-center z-10 bg-white bg-opacity-60 transform -translate-y-[3.5rem]">
      <div className="bg-white rounded-lg shadow-xl transform -translate-y-8">
        <span
          className="absolute top-3 right-8 font-extrabold cursor-pointer text-xl"
          onClick={() => {
            setShowUpdate(false);
          }}
        >
          &#10005;
        </span>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl p-6 my-6 ms-2 bg-white md:w-[40rem] h-[30rem] overflow-auto scrollable-container"
        >
          <h2 className="text-2xl font-semibold mb-4">Update User</h2>
          <div className="mb-3">
            <label
              htmlFor="id"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              User ID:
            </label>
            <input
              type="number"
              id="id"
              name="id"
              placeholder="Enter Id"
              value={userData.id}
              onChange={handleChange}
              className="w-full border rounded-lg py-1.5 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="first_name"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              First Name:
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={userData.first_name}
              onChange={handleChange}
              className="w-full border rounded-lg py-1.5 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="last_name"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={userData.last_name}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="avatar"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Avatar:
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              placeholder="Enter avatar URL"
              value={userData.avatar}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              placeholder="Select gender"
              value={userData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="domain"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Domain:
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              placeholder="Enter your domain"
              value={userData.domain}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="available"
              className="block text-gray-700 text-sm font-bold mb-1 ms-1"
            >
              Available:
            </label>
            <select
              id="available"
              name="available"
              placeholder="Select availability"
              value={userData.available}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 text-gray-700"
              required
            >
              <option value="">Select Availability</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
