const APIRequest = () => {
    const fetchData = async (path, auth = false) => {
        const headers = doAuthHeader(auth);

        const res = await fetch(process.env.REACT_APP_API_URL + path, {
            method: 'GET',
            headers: headers
        });

        return await res.json();
    }

    const saveData = async (path, data, method = "POST", auth = false) => {
        const headers = doAuthHeader(auth);

        // lets decide if it's an update or new record
        if (data.Id && parseInt(data.Id) > 0) {
            path += `/${data.Id}`;
            method = 'PUT';
        }

        const res = await fetch(process.env.REACT_APP_API_URL + path, {
            method: method,
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(data)
        });

        return method === "POST" ? await res.json() : true;
    }

    return {
        fetchData,
        saveData
    }
}

function doAuthHeader(auth) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (auth !== true) return headers;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData == null) {
        throw new Error("Not logged In");
    }
    headers.append('Authorization', `Bearer ${userData.token}`);
    return headers;
}

export default APIRequest;