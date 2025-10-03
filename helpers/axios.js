import axios from "axios";

export class Axios {

    config;
    api;
    
    constructor(config) {
        this.config = config
        this.api = axios.create(config)
        
        this.api.interceptors.response.use(
        (res) => {
            return res;
        },
        (error) => {
            if (error?.response?.status === 404) {
                // Handle forbidden error
                if (error?.response?.data?.detail) {
                    console.log(`Linkding API Error: ${error.response.data.detail}`)
                }
            }
            if (error?.response?.status === 403) {
            // Handle forbidden error
            }
            if (error?.response?.status === 401) {
            // Handle unauthorized error (e.g., log out the user)
            }
            console.error("API Error:", error?.message || "Unknown Error");
            throw error; // Propagate the error
        }
        );
    }
    
    getInstance() {
        return this.api
    }
}
