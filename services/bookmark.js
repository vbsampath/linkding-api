export class Bookmark {
    
    axios;
    urls;

    constructor(axios, urls) {
        this.axios = axios
        this.urls = urls
    }
    
     async getBookmark(id) {
        let url = this.urls.GET_BOOKMARK.replace(":id", id)
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw error.message;
        }
    }

    async getBookmarks(options = null) {
        let url = this.urls.GET_BOOKMARKS
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

    async createBookmark(data) {
        let url = this.urls.CREATE_BOOKMARK
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

    async updateBookmark(id, bookmark) {
        let method = this.getUpdateAction(bookmark)
        let data = JSON.stringify(bookmark)
        
        let url = this.urls.UPDATE_BOOKMARK.replace(":id", id)
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

    async deleteBookmark(id) {
        let url = this.urls.DELETE_BOOKMARK.replace(":id", id)
        try {
            const response = await this.axios.delete(url);
            return response.status === 204;
        } catch (error) {
            throw error.message;
        }
    }

    async getArchivedBookmarks(options = null) {
        let url = this.urls.GET_ARCHIVED_BOOKMARKS
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

    async archiveBookmark(id) {
        let url = this.urls.ARCHIVE_BOOKMARK.replace(":id", id)
        try {
            const response = await this.axios.post(url);
            return response.status === 204;
        } catch (error) {
            throw error.message;
        }
    }

    async unarchiveBookmark(id) {
        let url = this.urls.UNARCHIVE_BOOKMARK.replace(":id", id)
        try {
            const response = await this.axios.post(url);
            return response.status === 204;
        } catch (error) {
            throw error.message;
        }
    }

    async checkBookmark(options = null) {
        let url = this.urls.CHECK_BOOKMARK
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
}
