import siteController from '../app/Controllers/SiteControlller';
const router = require('express').Router();

router.use('/search', siteController.search);
router.use('/', siteController.index);

export default router;
