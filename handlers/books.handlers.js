const books = require("../data/books")

const booksHandlers = {};
booksHandlers.byCategory = (req, res, next) => {
    const category = req.query.category;
    if (category) {
        let _books = books.filter((b) => b.category == category);
        return res.status(200).json({ success: true, data:_books })
    }
    next()
};
booksHandlers.byAuthor = (req, res, next) => {
    const Author = req.query.category;
    if (Author) {
        let _author=books.filter((b) => b.Author == author);
        return res.status(200).json({ success: true, data: _Author })
    }
    next()
};
module.exports=booksHandlers