import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userData, userGoldData } from "../../api";
import "./dashboard.css";
import DashNav from "./DashNav";
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Dashboard = () => {
  // const user = useParams();

  var [user, setUser] = useState({});
  var [userGold, setUserGoldData] = useState({});

  async function getUserDataOnLoad() {
    var userRes = await userData();
    setUser(userRes.data);
  }
  async function getUserGoldOwnership() {
    var userGoldRes = await userGoldData();
    setUserGoldData(userGoldRes.data);
  }
  useEffect(() => {
    getUserDataOnLoad();
    getUserGoldOwnership();
  }, []);
  return userData === {} ? (
    <div className="dashboard">
      <DashNav />
      <h1>Welcome to Sayf</h1>
    </div>
  ) : (
    <div className="dashboard">
      <DashNav />
      <h1>Welcome to Sayf, {user["first_name"]}</h1>
      <h3>You have {userGold['total']} gms of Gold</h3>
    </div>
  );
};

export default Dashboard;
