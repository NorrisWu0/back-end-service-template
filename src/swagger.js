const swaggerJsdoc = require('swagger-jsdoc');

module.exports = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Great Phermesia API Template Documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development Server'
      }
    ]
  },
  apis: ['./src/controllers/*.js']
});
