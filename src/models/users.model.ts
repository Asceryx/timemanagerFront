import { Team } from '@/models/team.model';
import { Information } from './account.model';

export interface User {
    id: number;
    information: Information;
}

export interface Manager extends User {
    teams: Team[];
}

export interface GeneralManager extends Manager {}
