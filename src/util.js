export function checkStatus(response) {
    if ((response.status >= 200 && response.status < 300) || response.status === 0) {
        return response.text();
    } else {
        return Promise.reject(response.text());
        // return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
}

export function isTokenCurrent(currToken) {
    let claims = parseJwtClaims(currToken);
    let date = new Date();
    date.setTime(claims.exp * 1000);
    return (date > (new Date()));
}

// private functions
export function parseJwtClaims(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

export function weakVerifyJwt(token) {
    return (token.split('.').length === 3);
}
