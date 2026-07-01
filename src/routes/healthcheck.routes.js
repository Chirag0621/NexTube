import router from 'express';
import { healthcheck } from '../controllers/healthcheck.controllers.js';

const healthcheckRouter = router.Router();

healthcheckRouter.get('/', healthcheck);

export { healthcheckRouter };