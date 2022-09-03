import { instance } from './interceptor';

function request(
    url,
    params,
    options = {
        loading: true,
        mock: false,
        error: true
    },
    method
) {
    let loadingInstance;
    return new Promise((reject, resolve) => {
        let data = {};

        if (method === 'get') {
            data = { params };
        } else if (method === 'post') {
            data = {
                data: params
            };
        }

        instance({
            url,
            method,
            ...data
        })
            .then((res) => {
                //TODO: Add the handler api to process the response code.
                resolve(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {});
    });
}
