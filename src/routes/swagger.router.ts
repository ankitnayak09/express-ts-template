import swaggerUi from 'swagger-ui-express';
import express from 'express';
import swaggerDoc from '../swagger.js';

const swaggerRouter = express.Router();

swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default swaggerRouter;
