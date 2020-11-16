  
const httpClient = (url, isSecureResource, method, data, token) => {
    method = method || "GET";
    isSecureResource = isSecureResource || false;
    data = data || null;
  
    let payload = null;
  
    var headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
  
    if (isSecureResource) {
      headers.append("Authorization", "Bearer " + token);
    }
  
    if (data !== null) {
      payload = JSON.stringify(data);
    }
  
    return fetch(url, {
      method: method,
      headers: headers,
      body: payload
    });
  };
  
  export default httpClient;