const { nanoid } = require('nanoid');

const books = require('../model/books');

module.exports = (request, h) => {
	const { 
		name, 
		year, 
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading
	} = request.payload;

	let res = { status: 'fail' };

	if(!name){
		res.message = 'Gagal menambahkan buku. Mohon isi nama buku';
		const response = h.response(res);
		response.code(400);
		return response;
	}
	if(readPage > pageCount){
		res.message = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
		const response = h.response(res);
		response.code(400);
		return response;
	}

	const id = nanoid(16);
	const finished = pageCount === readPage;
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;

	const newBook = {
		id,
		name, 
		year, 
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		finished,
		reading,
		insertedAt,
		updatedAt
	};

	books.push(newBook);
	
	const isSuccess = books.filter((book) => book.id === id).length > 0;
	if(!isSuccess){
		res.status = 'error';
		res.message = 'Catatan gagal ditambahkan';
		const response = h.response(res);
		response.code(500);
		return response;        
	}

	const response = h.response({
		status: 'success',
		message: 'Buku berhasil ditambahkan',
		data:{  bookId:id   }
	});
	response.code(201);
	return response;
};