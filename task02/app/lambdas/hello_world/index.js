exports.handler = async (event) => {
    const validPathname = '/hello';
    const validHttpMethod = 'GET';
    // TODO implement
    if (event.path === validPathname && event.httpMethod === validHttpMethod) {
        const response = {
            statusCode: 200,
            message: 'Hello from Lambda',
        };

        return response;
    } else {
        return {
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${event.path}. HTTP method: ${event.httpMethod}`,
        }
    }
};
