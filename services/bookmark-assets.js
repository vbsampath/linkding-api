export class BookmarkAssets {
    
    axios;
    urls;

    constructor(axios, urls) {
        this.axios = axios
        this.urls = urls
    }
    
     async getBookmarkAsset(bid, id) {
        let url = this.urls.GET_BOOKMARK_ASSET.replace(":bid", bid).replace(":id", id)
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async getBookmarkAssets(bid, options = null) {
        let url = this.urls.GET_BOOKMARK_ASSETS.replace(":bid", bid)
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

    async uploadBookmarkAsset(bid, data) {
        let url = this.urls.UPLOAD_BOOKMARK_ASSET.replace(":bid", bid)
        let requestOptions = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            const response = await this.axios.post(url, data, requestOptions);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async downloadBookmarkAsset(bid, id) {
        let url = this.urls.DOWNLOAD_BOOKMARK_ASSET.replace(":bid", bid).replace(":id", id)
        let requestOptions = {
            responseType: "stream"
        }
        try {
            const response = await this.axios.get(url, requestOptions)
            return response;
        } catch (error) {
            throw error.message;
        }
    }

    async deleteBookmarkAsset(bid, id) {
        let url = this.urls.DELETE_BOOKMARK_ASSET.replace(":bid", bid).replace(":id", id)
        try {
            const response = await this.axios.delete(url);
            return response.status === 204;
        } catch (error) {
            throw error.message;
        }
    }
}
