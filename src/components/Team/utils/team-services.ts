import { Team } from '@/models/team.model';
import { User } from '@/models/users.model';
import axios from "axios";


// const api = axios.create({
//     baseURL: "https://fathomless-beyond-55391.herokuapp.com/api",
//     headers: {
//         'token': localStorage.getItem('token'),
//     },

// });


const api = axios.create({
    baseURL: 'https://demo0330246.mockable.io', // mock
});

class TeamService {
    
    public async getAll(): Promise<Team[]> {
        return await api.get('/team').then((response) => response.data );
    }
    
    public async get(user: User): Promise<Team> {
        return await api.get('/team', { params: { "user_id": user.id } }).then((response) => response.data );
    }
    
    public put(team: Team): void {
        api.put('/team/' + team.id, { params: team })
    }

    public post(team: Team): void {
        api.post('/team', team);
    }
    
    public delete(team: Team): void {
        api.delete('/team' + team.id)
    } 
    

    
}
export default new TeamService(); 