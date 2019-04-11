let axios = require('axios');

let axiosClient = axios.create({
    // baseURL: '//localhost:3001/api/v1/'
    baseURL: '//masterzz.club/api/v1/'
});

export default axiosClient;
