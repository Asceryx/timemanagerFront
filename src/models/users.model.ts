import { Team } from '@/models/team.model';
import { Information } from './account.model';

export interface User {
    id: number;
    role: string;
    information: Information;
    teams?: Team[];
}
