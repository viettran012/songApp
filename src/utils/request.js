import axios from 'axios';

export const get = async (path, params = {}, headers = {}) => {
    const response = await axios.get(path, { params: params, headers: headers });
    return response.data;
};

export const post = async (path, body = {}, options) => {
    const response = await axios.post(path, body, {
        ...options,
    });
    return response.data;
};
