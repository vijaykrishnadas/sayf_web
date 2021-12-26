// var mobileNumber = '';

// async function onClickSendOtp() {
//   mobileNumber = document.getElementById('pno').value;
//   console.log(`Mobile Number = ${mobileNumber}`);
//     const response = await fetch('https://api.sayf.in/otp/send/', {
//       method: 'POST',
//       body: JSON.stringify({
//         "country_code": "91",
//         "mobile": mobileNumber
//       }), // string or object
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });//extract JSON from the http response
//     var res = await response.text();
//     console.log(res);
//     // location.href="./verify_otp.html";
//     var otpEle = document.getElementById('otp-form');
//     otpEle.style.display = 'block';
//     // do something with myJson
//   }

//   async function onClickVerifyOtp() {
//     // mobileNumber = document.getElementById('pno').value;
//     var otp = document.getElementById('otp').value;
//     console.log(`Mobile Number = ${mobileNumber}`);
//     console.log(`OTP = ${otp}`);
//       const response = await fetch('https://api.sayf.in/otp/verify/', {
//         method: 'POST',
//         body: JSON.stringify({
//           "country_code": "91",
//           "mobile": mobileNumber,
//           "otp": otp
//         }), // string or object
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });//extract JSON from the http response
//       var res = await response.json();
//       console.log(res);
//       if (res['type'] == "success")
//       {
//         if (res['user_exist'] == true)
//         {
//           localStorage.setItem('token', res['token']);
//           location.href="./dashboard.html";
//         }
//       } else {
//         alert('Wrong Otp!');
//       }
//       // do something with myJson
//     }

//     async function getData() {
//       var userToken = await localStorage.getItem('token');
//       var baseUrl = "https://api.sayf.in/";
//       var header = {
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${userToken}`
//       };
//       var res = await fetch('https://api.sayf.in/users/', {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Token ${userToken}`
//         }
//       });
//       var goldOwnerShip = await fetch("https://api.sayf.in/golds/gold-ownership/", {
//         method: "GET",
//         headers: header
//       });
//       var stores = await fetch("https://api.sayf.in/partners/", {
//         method: "GET",
//         headers: header
//       });
//       var storesData = await stores.json();
//       var goldData = await goldOwnerShip.json();
//       var resData = await res.json();
//       console.log(resData);
//       console.log(goldData);
//       console.log(storesData);
//       document.getElementById('name').innerHTML = resData['first_name'];
//       document.getElementById('gold-asset').innerHTML = goldData['total'];
//     }

import aes256 from "aes256";
import axios from "axios";

const API = axios.create({ baseURL: "https://backend.sayf.in/" }); // Development Server
// const API = axios.create({ baseURL: "https://api.sayf.in/" }); // Production Server

API.interceptors.request.use((req) => {
  var tk = localStorage.getItem("token") || null;
  if (tk != null) {
  var x = aes256.decrypt(process.env.REACT_APP_AES256_KEY, tk);
    if (x) {
      req.headers = {
        Authorization: `Token ${x}`,
      };
    }
  }
  return req;
});

export const sendOtp = (body) => API.post("/otp/send/", body);
export const verifyOtp = (body) => API.post("/otp/verify/", body);

export const userData = () => API.get("/users/");
export const userGoldData = () => API.get("/golds/gold-ownership/");
