class NewsController {
  index(req: any, res: any) {
    res.render('news');
  }

  show(req: any, res: any) {
    res.render('detail');
  }
}

export default new NewsController();
