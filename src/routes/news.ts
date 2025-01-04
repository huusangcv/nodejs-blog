import newsController from '../app/controllers/NewsController';
const router = require('express').Router();

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

export default router;
