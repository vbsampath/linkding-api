export class Bundle {
    
    axios;
    urls;

    constructor(axios, urls) {
        this.axios = axios
        this.urls = urls
    }
    
     async getBundle(id) {
        let url = this.urls.GET_BUNDLE.replace(":id", id)
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async getBundles(options = null) {
        let url = this.urls.GET_BUNDLES
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

    async createBundle(data) {
        let url = this.urls.CREATE_BUNDLE
        try {
            const response = await this.axios.post(url, data);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    getUpdateAction(obj) {
        return (Object.values(obj).some((property) => property === undefined))? "patch" : "put";
    }

    async updateBundle(id, bundle) {
        let method = this.getUpdateAction(bundle)
        let data = JSON.stringify(bundle)
        
        let url = this.urls.UPDATE_BUNDLE.replace(":id", id)
        let response;
        try {
            if (method === "put") {
                response = await this.axios.put(url, data)
            }
            else if (method === "patch") {
                response = await this.axios.patch(url, data)
            }
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async deleteBundle(id) {
        let url = this.urls.DELETE_BUNDLE.replace(":id", id)
        try {
            const response = await this.axios.delete(url);
            return response.status === 204;
        } catch (error) {
            throw error.message;
        }
    }
}
