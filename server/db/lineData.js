import {Connection} from './index';

export const all =  async () => {
    return new Promise((res, rej) => {

        Connection.query('SELECT * from lineData', (err, result) =>{
            if(err){
                return rej(err);
            }
            res(result);
        });
    });
}

export default{
    all
}