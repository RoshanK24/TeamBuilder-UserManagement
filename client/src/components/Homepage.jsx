import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import "../index.css";
import Card from "./Card";
import Sidebar from "./Layout/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "./store/slices/usersSlice";
import { storePageUser } from "./store/slices/pageUserSlice";
import axios from "axios";
import Myteam from "./Myteam";
import Pagination from "./Pagination";
import { Updateuser } from "./Updateuser";

const Homepage = () => {
  const [editUser, setEditUser] = useState({});
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [showEdit, setShowEdit] = useState(false);
  const [showpagination, setShowPagination] = useState(false);
  const [showMtTeam, setShowMyTeam] = useState(false);

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const pageUser = useSelector((state) => state.pageUser);

  useEffect(() => {
    getAllUsers();
    getUsers();
    getTotal();
    setShowPagination(true);
  }, []);

  useEffect(() => {
    // console.log(allUsers);
    // console.log(pageUser);
  }, [allUsers, pageUser]);

  //get all users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8040/api/v1/users");
      dispatch(storeUsers(data.users));
    } catch (error) {
      console.log(error);
    }
  };

  // getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8040/api/v1/user-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  //Get Product
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8040/api/v1/users/${page}`
      );
      dispatch(storePageUser(data.users));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <Layout>
      {showMtTeam ? (
        <Myteam
          setShowEdit={setShowEdit}
          setEditUser={setEditUser}
          setShowMyTeam={setShowMyTeam}
        />
      ) : (
        <></>
      )}
      <div className="h-[80vh] w-full md:flex overflow-auto">
        {showEdit ? (
          <Updateuser setShowUpdate={setShowEdit} user={editUser} />
        ) : (
          <></>
        )}
        <></>
        <div className="md:flex-none md:w-80 bg-purple-200 flex md:justify-end sidebar justify-center">
          <Sidebar
            getUsers={getUsers}
            setShowPagination={setShowPagination}
            setShowMyTeam={setShowMyTeam}
          />
        </div>
        <div className="bg-purple-200 overflow-auto w-full main__container">
          <div className="flex flex-wrap justify-center w-full p-4">
            {pageUser?.map((user) => (
              <div key={user.id}>
                <Card
                  user={user}
                  setShowEdit={setShowEdit}
                  setEditUser={setEditUser}
                  getUsers={getUsers}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            {showpagination ? (
              <Pagination
                page={page}
                setPage={setPage}
                total={Math.floor(total / 20)}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
