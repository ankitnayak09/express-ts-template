const swaggerDoc = {
    openapi: '3.0.0',
    info: {
        title: 'AppName API',
        version: '1.0.0',
        description: 'API documentation for the App',
    },
    servers: [
        {
            url: 'http://localhost:3000/api/v1',
        },
    ],
    paths: {
        '/': {
            get: {
                summary: 'Home route',
                responses: {
                    200: {
                        description: 'API is Running smooth',
                    },
                },
            },
        },
        '/items': {
            get: {
                summary: 'Get all items',
                responses: {
                    200: {
                        description: 'List of items',
                    },
                },
            },
            post: {
                summary: 'Create a new item',
                responses: {
                    201: {
                        description: 'Item created',
                    },
                },
            },
            put: {
                summary: 'Update an item',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Item updated successfully',
                    },
                    404: {
                        description: 'Item not found',
                    },
                },
            },
            patch: {
                summary: 'Partially update an item',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Item partially updated',
                    },
                    404: {
                        description: 'Item not found',
                    },
                },
            },
            delete: {
                summary: 'Delete an item',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    204: {
                        description: 'Item deleted successfully',
                    },
                    404: {
                        description: 'Item not found',
                    },
                },
            },
        },
    },
};

export default swaggerDoc;
