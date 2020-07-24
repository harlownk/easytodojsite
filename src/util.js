export function checkStatus(response) {
    if ((response.status >= 200 && response.status < 300) || response.status === 0) {
        return response.text();
    } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
}
