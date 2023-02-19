import { ApiService } from "./ApiService"

export class UserService {
    api

    constructor() {
        this.api = new ApiService
    }

    async delete(userId) {
        return await this.api.callApi(`user/delete/${userId}`, null, 'DELETE')
    }

    async edit(userId, data) {
        return await this.api.callApi(`user/edit/${userId}`, data, 'PATCH')
    }
}