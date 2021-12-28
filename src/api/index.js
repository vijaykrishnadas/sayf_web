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

export const partnerStores = () => API.get("/partners/");
