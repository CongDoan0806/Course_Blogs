class NewsController {
    // GET, news
    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send('Hello World')
    }
}

module.exports = new NewsController; // exports cais gif thif khi require thì nhận được cái đấy