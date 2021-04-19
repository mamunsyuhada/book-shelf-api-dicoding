const handler = require('./handler/index');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: handler.addBook
	},{
		method: 'GET',
		path: '/books',
		handler: handler.listBook
	},{
		method: 'GET',
		path: '/books/{bookId}',
		handler: handler.detailBook
	},{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: handler.editBook
	},{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: handler.deleteBook
	}
];

module.exports = routes;