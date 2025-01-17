import axios from 'axios';

const loginUrl = '<domain_name>/api/v1/login';
const loginService = async (username, password) => {
    return await axios.post(loginUrl, {
        username,
        password,
    });
};

const signInUrl = '<domain_name>/api/v1/new-register';
const signInService = async reqBodyData => {
    return await axios.post(signInUrl, {
        name: reqBodyData.name,
        username: reqBodyData.username,
        password: reqBodyData.password,
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loginService,
    signInService,
};
