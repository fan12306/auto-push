import {get, post} from "@/utils/axios";

class Blog {
    constructor() {
        this.prefix = 'v1/blog'
    }
    async getAllBlog() {
        await get(this.prefix)
    }

    async getBlogById(params) {
        await get(this.prefix + '?id=' + params)
    }

    async updateBlog(params) {
        return await post(this.prefix + '/update', params)
    }

    async deleteBlog(params) {
        return await post(this.prefix + '/delete', params)
    }

    async createBlog(params) {
        return await post(this.prefix, params)
    }

    async getBlogTypeList() {
        return await get(this.prefix + '/tags')
    }

    async getBlogStatusList() {
        return await get(this.prefix + '/statusList')
    }
}

export default Blog