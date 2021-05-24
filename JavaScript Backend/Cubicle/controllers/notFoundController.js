function notFound(req, res) {
    res.status(404).render('404');
    return null;
}

module.exports = notFound;