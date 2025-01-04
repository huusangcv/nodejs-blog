import newRoute from './news';
import siteRoute from './site';
const route = (app: any) => {
  app.use('/news', newRoute);
  app.use('/', siteRoute);
};

export default route;
