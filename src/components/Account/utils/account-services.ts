import { Information } from "@/models/account.model";
import axios, { AxiosResponse } from "axios";


const api = axios.create({
    baseURL: "https://fathomless-beyond-55391.herokuapp.com/api",
    headers: {
        'token': localStorage.getItem('token'),
    },

});

class AccountService {
    
    public async get(): Promise<Information> {
        return await api.get("/users").then((response) => response.data);
    }
    public put(information: Information): Promise<AxiosResponse> {
        return api.put("/users", information).then();
    }

    public post(information: Information): void {
      api.post("/users", information);
    }

    public delete(userId?: string): void {
        if (userId != undefined) {
            api.delete("/users" + userId);
        }
        else {
            api.delete("/users");
        }
      
    }
}
export default new AccountService(); 