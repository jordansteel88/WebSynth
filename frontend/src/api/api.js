import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Handles user/auth calls to backend.
 *
 */

class BackendApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${BackendApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async register(data) {
    console.log(data);
    let res = await this.request('auth/register', data, "post");
    console.log('after register function');
    return res.token;
  }  
  
  static async login(data) {
    let res = await this.request('auth/token', data, "post");
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`, "get");
    return res.user;
  }
  
  static async saveProfile(data) {
    let res = await this.request(`profiles/`, data, "post");
    return res.profile;
  }  
  
  static async getUsersProfiles(username) {
    let res = await this.request(`profiles/${username}`, "get");
    return res.profiles;
  }  
  
  static async getProfileData(username, profileID) {
    console.log(username, profileID);
    let res = await this.request(`profiles/${username}/${profileID}`, "get");
    console.log(res.profiles);
    return res.profiles;
  }
}

export default BackendApi;