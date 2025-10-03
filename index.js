import { Axios, Urls } from "./helpers/index.js"
import { Bundle, User, Tag, Bookmark, BookmarkAssets } from "./services/index.js"

export class Linkding {

    token;
    axiosInstance;
    axios;
    urls;

    bundle;
    user;
    tag;
    bookmarkAssets;
    bookmark;

    constructor(serverUrl, token) {
        this.axiosInstance = new Axios({
            headers: {
                Authorization: `Bearer ${token}`,
                "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json"
            },
            timeout: 120000,
            baseURL: serverUrl
        })
        this.axios = this.axiosInstance.getInstance()

        this.urls = new Urls(serverUrl, "/api")
        this.bundle = new Bundle(this.axios, this.urls.getUrls().bundle)
        this.user = new User(this.axios, this.urls.getUrls().user)
        this.tag = new Tag(this.axios, this.urls.getUrls().tag)
        this.bookmark = new Bookmark(this.axios, this.urls.getUrls().bookmark)
        this.bookmarkAssets = new BookmarkAssets(this.axios, this.urls.getUrls().assets)
    }
    getBundleInstance() {
        return this.bundle
    }
    getUserInstance() {
        return this.user
    }
    getTagInstance() {
        return this.tag
    }
    getBookmarkInstance() {
        return this.bookmark
    }
    getBookmarkAssetsInstance() {
        return this.bookmarkAssets
    }
}
