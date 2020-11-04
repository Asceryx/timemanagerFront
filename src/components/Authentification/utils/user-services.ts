import { AuthResponse } from "@/models/auth.model";
import axios from "axios";

const api = axios.create({
  baseURL: "https://fathomless-beyond-55391.herokuapp.com/api",
  headers: {
    token: localStorage.getItem("token"),
  },
});

class UserService {
  public get(): Promise<AuthResponse> {
    return api.get("/users").then((response) => response.data);
  }
}

export default new UserService();
