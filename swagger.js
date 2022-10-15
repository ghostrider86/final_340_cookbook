const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Temple API'
  },
  host: 'project-fin.onrender.com',
  schemes: ['https'],
  tags: [
  {
    name: 'Events',
    description: 'Endpoints for Events'
  }

],
};

const outputFile = './routes/swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
