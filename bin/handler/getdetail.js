const books = require('../model/books');

module.exports = (request, h) => {
	const { bookId } = request.params;
	for(const book of books){
		if(bookId===book.id){
			const response = h.response({
				status: 'success',
				data:{ book }
			});
			response.code(200);
			return response;
		}
	}
	const response = h.response({
		status: 'fail',
		message: 'Buku tidak ditemukan'
	});
	response.code(404);
	return response;
};