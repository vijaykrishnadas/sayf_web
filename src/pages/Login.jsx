import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./login.css";
import Logo_D from "../assets/logo_d.png";
import contact from "./login_assets/contact.png";
import { sendOtp, verifyOtp } from "../api/index";
import aes256 from 'aes256';

const Login = () => {
  const [enterNumber, setEnterNumber] = useState(true);
  const [number, setNumber] = useState(null);
  const [otp, setOtp] = useState(false);
  const [otpVal, setOtpVal] = useState("");

  const history = useHistory();

  function getNumber(val) {
    setNumber(val.target.value);
  }

  function getOtpVal(val) {
    setOtpVal(val.target.value);
  }

  async function onClickSendOtp() {
    // Send OTP
    console.log(number);
    var body = {
      mobile: number,
    };
    var res = await sendOtp(body);
    if (res.status === 200) {
      setOtp(true);
      setEnterNumber(false);
    } else {
      alert("Some Error Occurred");
    }
  }

  async function onClickVerifyOtp() {
    // Verify OTP
    console.log(otpVal);
    console.log(number);
    var body = {
      mobile: number,
      otp: otpVal,
    };
    var msg = "";
    var res = await verifyOtp(body);
    // console.log(res.body);
    if (res.status === 200) {
      var resData = res.data;
      if (resData["type"] === "success") {
        var token = resData['token'];
        var encryptedToken = aes256.encrypt(process.env.REACT_APP_AES256_KEY, token);
        localStorage.setItem('token', encryptedToken);
        history.push("/dashboard");
        return;
      } else {
        msg = "Wrong OTP!";
      }
    } else {
      msg = "Oops! Something Went Wrong";
    }
    alert(msg);
  }
  return (
    <div className="login-body">
      {enterNumber ? (
        <form >
          <div className="login">
            <img className="login-img" src={Logo_D} alt="sayf_logo" />
            <h3>Login </h3>
            <div className="number-container">
              <div className="login-text">
                <img className="contact-logo" src={contact} alt="contact" />
                Enter Contact Number
              </div>
              <input
                required
                placeholder="98754...."
                type="text"
                onChange={getNumber}
              />{" "}
              <br />
              <button type="button" onClick={onClickSendOtp} className="otp-btn">
                Get OTP
              </button>{" "}
              <br />
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
      {otp ? (
        <form>
          <div className="login">
            <img className="login-img" src={Logo_D} alt="sayf_logo" />
            <h3>Login </h3>
            <div className="otp-container">
              <p>OTP sent to {number}</p>
              <input
                required
                placeholder="Enter OTP here..."
                type="text"
                onChange={getOtpVal}
              />{" "}
              <br />
              <button  type="button" onClick={onClickVerifyOtp} className="otp-btn">Verify</button> <br />
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Login;
