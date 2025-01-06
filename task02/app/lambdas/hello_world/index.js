exports.handler = async (event) => {
    // const path = event.http.path;
    // const method = event.http.method;

    return { ...event };
    // TODO implement
    // if (path === "/hello" && method === "GET") {
    //     const response = {
    //         statusCode: 200,
    //         message: JSON.stringify('Hello from Lambda'),
    //     };
    //
    //     return response;
    // } else {
    //     const unhappyResponse = {
    //         statusCode: 400,
    //         message: JSON.stringify(`Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`),
    //     }
    //
    //     return unhappyResponse;
    // }
};
