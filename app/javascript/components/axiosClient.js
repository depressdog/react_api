let axios = require('axios');

let axiosClient = axios.create({
    baseURL: '//masterzz.club/api/v1/'
});

export default axiosClient;