import {get, post, put, _delete} from "@/utils/axios";

class Blog {
    constructor() {
        this.prefix = 'v1/blog'
    }
    async getAllBlog() {
        return await get(this.prefix)
    }

    async getBlogById(params) {
       return await get(this.prefix + '/'+params)
    }

    async updateBlog(id, params) {
        return await put(`${this.prefix}/${id}`, params, {
            showMsg: true
        })
    }

    async deleteBlog(params) {
        return await _delete (`${this.prefix}/${params}`, {
            showMsg: true
        });
    }

    async createBlog(params) {
        return await post(this.prefix, params, {
            showMsg: true
        })
    }

    async getBlogTypeList() {
        return await get(this.prefix + '/tags')
    }

    async getBlogStatusList() {
        return await get(this.prefix + '/statusList')
    }
}

export default Blog