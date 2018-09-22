module.exports = function ExpressHistoryApiFallbackMiddleware() {
    return function(req, res, next) {
	    const webpackRequests = /(__webpack.*)/;
	    const assetsRequests = /(\.(?!html)\w+$)/;

	    if (
            (req.method === 'GET' || req.method === 'HEAD') &&
		    req.accepts('html') &&
		    !webpackRequests.test(req.url) &&
		    !assetsRequests.test(req.url)
	    ) {
		    req.url = '/';
	    }
	    next();
    }
};
