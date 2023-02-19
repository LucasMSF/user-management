export class ApiService {
    async callApi(endpoint, data = null, method = 'GET', headers = {'Content-type': 'application/json; charset=UTF-8', 'Accept': 'application/json'}) {
        const response =  await fetch(`/api/${endpoint}`, {
            method,
            body: data ? JSON.stringify(data) : null,
            headers

        });
        return await response.json();
    }
}