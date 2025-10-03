export class Tag {
    
    axios;
    urls;

    constructor(axios, urls) {
        this.axios = axios
        this.urls = urls
    }
    
     async getTag(id) {
        let url = this.urls.GET_TAG.replace(":id", id)
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async getTags(options = null) {
        let url = this.urls.GET_TAGS
        let requestOptions = {
            params: options
        };
        try {
            const response = await this.axios.get(url, requestOptions);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async createTag(data) {
        let url = this.urls.CREATE_TAG
        try {
            const response = await this.axios.post(url, data);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }
}
