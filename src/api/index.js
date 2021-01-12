import api from "./config";

export default {
  login: (data) => {
    return api.post("/signin", data);
  },
  register: (data) => {
    return api.post("/signup", data);
  },
  getRooms: (userId) => {
    return api.get(`/room/${userId}`);
  },
};
