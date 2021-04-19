const books = require('../model/books');

module.exports = (_, h) => {
	let listBook = JSON.parse(JSON.stringify(books));

	for(let book of listBook){
		delete book.year;
		delete book.author;
		delete book.summary;
		delete book.pageCount;
		delete book.readPage;
		delete book.finished;
		delete book.reading;
		delete book.insertedAt;
		delete book.updatedAt;
	}
	const response = h.response({
		status: 'success',
		data:{  books: listBook   }
	});
	response.code(200);
	return response;
};