const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Team Project -- Cook book',
    description: 'A program where one can view and edit recipes'
  },
  host: 'project-finish.onrender.com',
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
