import axios from 'axios';
import cookie from 'react-cookie';

export default function() {
    return axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: {
            'Authorization': `JWT ${cookie.load('token')}`
        }
    });
}
