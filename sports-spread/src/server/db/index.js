import mysql from 'mysql';
import config from '../config';

import lineData from './lineData';

export const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Connected as id ' + connection.threadId);
});


export default {
    lineData
}