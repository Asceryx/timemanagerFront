import { Information } from "@/models/account.model";
import { WorkingTime } from '@/models/worktime.model';
import axios from "axios";


const api = axios.create({
    baseURL: "https://fathomless-beyond-55391.herokuapp.com/api",
    headers: {
        'token': localStorage.getItem('token'),
    },

});

class ReportService {
    public post(workingtime: WorkingTime): void {
      api.post("/workingTime/create", workingtime);
    }
}
export default new ReportService(); 