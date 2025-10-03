export class User {
    
    axios;
    urls;

    constructor(axios, urls) {
        this.axios = axios
        this.urls = urls
    }
    
     async getUser() {
        let url = this.urls.GET_USER
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }
}
