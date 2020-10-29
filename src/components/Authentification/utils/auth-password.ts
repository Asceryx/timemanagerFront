var bcrypt = require('bcryptjs');

export default class Auth {
    
    public static hashPassword(password: string, rounds: number, callback: (error: Error, hash: string) => void) : void {
        bcrypt.hash(password, rounds, (error: Error, hash: string) => {
            callback(error, hash);
        });
    }

    public static compare(password: string, dbHash: string, callback: (error: string | null, match: boolean | null) => void) : void {
        bcrypt.compare(password, dbHash, (err: Error, match: boolean) => {
            if(match) {
                callback(null, true);
            } else {
                callback('Invalid password match', null);
            }
        });
    }
}

