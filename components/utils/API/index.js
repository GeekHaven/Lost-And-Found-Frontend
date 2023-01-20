import axios from "axios";
import { getLS, removeLS } from "../LocalStorage/index";

const API_URL = "http://localhost:8000";

const getAccessToken = () => {
    return getLS("jwt_token");
};

const getHeaders = (token) => {
    if (!token) token = getAccessToken();
    if (token) {
        return {
            headers: {
                Accept: "application/json",
                Authorization: token,
            },
        };
    }
    return {
        headers: {
            Accept: "application/json",
        },
    };
};

const post = async (endpoint, body, token = null, form = false) => {
    let options = getHeaders(token);
    if (form) {
        options.headers["Content-Type"] = "multipart/form-data";
    }
    try {
      const response = await axios.post(API_URL + endpoint, body, options);
      return response;
    } catch (err) {
      console.error(err?.response?.data || err);
      if (err?.response?.status === 401) {
        console.log("Wrong password");
        removeLS("jwt_token");
      }
      return err?.response?.data || err;
    }
};

const get = async (endpoint, token = null) => {
    try {
        const response = await axios.get(API_URL + endpoint, getHeaders(token));
        return response;
    } catch (err) {
        console.error(err?.response?.data || err);
        if (err?.response?.status === 401) {
            console.log("Wrong password");
            removeLS("jwt_token");
        }
        return err?.response?.data || err;
    }
};  

const put = async (endpoint, body, token = null) => {
    try {
        const response = await axios.put(
            API_URL + endpoint,
            body,
            getHeaders(token)
        );
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        if (err?.response?.status === 401) {
            console.log("Wrong password");
            removeLS("jwt_token");
        }
        return err?.response?.data || err;
    }
};

const remove = async (endpoint, token = null) => {
    try {
        const response = await axios.delete(
            API_URL + endpoint,
            getHeaders(token)
        );
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        if (err?.response?.status === 401) {
            console.log("Wrong password");
            removeLS("jwt_token");
        }
        return err?.response?.data || err;
    }
};

export { getAccessToken, post, get, put, remove, API_URL, getHeaders };
