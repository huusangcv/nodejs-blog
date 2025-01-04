class SiteController {
  index(req: any, res: any) {
    res.render('home');
  }

  search(req: any, res: any) {
    res.render('search');
  }
}

export default new SiteController();
