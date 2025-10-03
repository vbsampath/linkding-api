export class Urls {
    
    apiBaseUrl

    constructor(serverUrl, apiUrl) {
        this.apiBaseUrl = `${serverUrl}${apiUrl}`
    }
    
    getUrls() {
        return {
            bookmark: {
                GET_BOOKMARK: `${this.apiBaseUrl}/bookmarks/:id/`,
                GET_BOOKMARKS: `${this.apiBaseUrl}/bookmarks/`,
                CREATE_BOOKMARK: `${this.apiBaseUrl}/bookmarks/`,
                UPDATE_BOOKMARK: `${this.apiBaseUrl}/bookmarks/:id/`,
                DELETE_BOOKMARK: `${this.apiBaseUrl}/bookmarks/:id/`,
                GET_ARCHIVED_BOOKMARKS: `${this.apiBaseUrl}/bookmarks/archived/`,
                ARCHIVE_BOOKMARK: `${this.apiBaseUrl}/bookmarks/:id/archive/`,
                UNARCHIVE_BOOKMARK: `${this.apiBaseUrl}/bookmarks/:id/unarchive/`,
                CHECK_BOOKMARK: `${this.apiBaseUrl}/bookmarks/check/`
            },
            assets: {
                GET_BOOKMARK_ASSET: `${this.apiBaseUrl}/bookmarks/:bid/assets/:id/`,
                GET_BOOKMARK_ASSETS: `${this.apiBaseUrl}/bookmarks/:bid/assets/`,
                DOWNLOAD_BOOKMARK_ASSET: `${this.apiBaseUrl}/bookmarks/:bid/assets/:id/download/`,
                UPLOAD_BOOKMARK_ASSET: `${this.apiBaseUrl}/bookmarks/:bid/assets/upload/`,
                DELETE_BOOKMARK_ASSET: `${this.apiBaseUrl}/bookmarks/:bid/assets/:id/`
            },
            user: {
                GET_USER: `${this.apiBaseUrl}/user/profile/`
            },
            tag: {
                GET_TAG: `${this.apiBaseUrl}/tags/:id/`,
                GET_TAGS: `${this.apiBaseUrl}/tags/`,
                CREATE_TAG: `${this.apiBaseUrl}/tags/`
            },
            bundle: {
                GET_BUNDLE: `${this.apiBaseUrl}/bundles/:id/`,
                GET_BUNDLES: `${this.apiBaseUrl}/bundles/`,
                CREATE_BUNDLE: `${this.apiBaseUrl}/bundles/`,
                UPDATE_BUNDLE: `${this.apiBaseUrl}/bundles/:id/`,
                DELETE_BUNDLE: `${this.apiBaseUrl}/bundles/:id/`
            }
        }
    }
}
