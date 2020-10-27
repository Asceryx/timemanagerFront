import { User } from '@/models/users.model';

export interface Team {
    id?: number;
    name: string;
    members: User[];
}