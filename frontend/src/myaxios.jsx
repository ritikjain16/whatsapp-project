import axios from "axios";

const myaxios = axios.create({
  baseURL: "http://localhost:5000",
});

export const BACKEND_URL = "http://localhost:5000";
export const MYSECRETPASSPHRASE = "Your Secret Key";
export const FIREBASE_NOTIFICATION_KEY = "Your Firebase Notification Key";

export default myaxios;
