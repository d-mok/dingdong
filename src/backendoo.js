/* 

This is a standard module.
It can be used in all front-end to connect to backend.
Axios should be imported before me.
SweetAlert2 should be imported before me.

The backend must have:
- /login?redirect=      for login
- /status               for login check, which return {login, ...}
- when dev, hosted at https://localhost:5000
- when prod, hosted at the root url of the frontend
- return 401 when user is not login
- return 403 when user is login when trying to call an API endpoint without role permission

The frontend must have:
1. Axios imported
2. SweetAlert2 imported
3. global var NODE_ENV defined ("development" or "production")

*/





globalThis.backend = {
    // decide root_url on development or production
    root_url: NODE_ENV == "development" ? 'https://localhost:5000' : window.location.origin,
    login() {
        // after login, should redirect to current url
        const url = window.location.href;
        window.location.replace(backend.root_url + "/login?redirect=" + url);
    },
    async checkLogin() {
        // the backend should have /status endpoint
        const status = await backend.get('status');
        return status.login;
    },
    showError(title, text) {
        // use SweetAlert2 to display error
        Swal.fire({
            title: title,
            text: text,
            icon: "error",
            footer: "See F12 log for detail."
        });
    },
    async ajax(endpoint, method = 'get', params = {}, data = {}) {
        return await axios({
            method: method,
            withCredentials: true,
            url: backend.root_url + "/" + endpoint,
            params: params,
            data: data
        }).then(r => r.data)
            .catch(error => {
                if (error.response) {
                    const data = error.response.data;
                    const code = error.response.status;
                    if (code === 401) {
                        // not login, redirect to login
                        console.log('[status 401] Not Login Yet. Redirect Login Now.');
                        backend.login();
                        return undefined;
                    }
                    if (code === 403) {
                        // no role permission, redirect to login
                        console.log('[status 403] No Role Permission. Redirect Login Now.');
                        backend.login();
                        return undefined;
                    }
                    // some other client error (server has response but not OK)
                    console.log("[Client Error]", JSON.stringify(data, null, 2));
                    backend.showError(data.msg, data.detail);
                    throw 'ClientError';
                } else {
                    // some server error (server has no repsonse)
                    console.log("[Server Error] No Response From Server!");
                    backend.showError("Server Error!", "No Response From Server!");
                    throw 'ServerError';
                };
            });
    },
    get(endpoint, params = {}) {
        return backend.ajax(endpoint, 'get', params);
    },
    post(endpoint, params = {}, data = {}) {
        return backend.ajax(endpoint, 'post', params, data);
    },
    put(endpoint, params = {}, data = {}) {
        return backend.ajax(endpoint, 'put', params, data);
    },
    del(endpoint, params = {}, data = {}) {
        return backend.ajax(endpoint, 'delete', params, data);
    }
};

// once loaded, check login status
// if not login, redirect to login immediately
backend.checkLogin().then(result => {
    console.log("Initial Check of Login Check: " + result);
    if (!result) backend.login();
});

