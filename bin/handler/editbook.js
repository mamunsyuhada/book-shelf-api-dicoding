const books = require('../model/books');

module.exports = (request, h) => {
	const { bookId } = request.params;

	const index = books.findIndex((book) => book.id === bookId);
	if(index===-1){
		const response = h.response({
			status:'fail',
			message: 'Gagal memperbarui buku. Id tidak ditemukan'
		});
		response.code(404);
		return response;
	}

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

	if(!name){
		const response = h.response({
			status:'fail',
			message: 'Gagal memperbarui buku. Mohon isi nama buku'
		});
		response.code(400);
		return response;
	}
	if(readPage > pageCount){
		const response = h.response({
			status:'fail',
			message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
		});
		response.code(400);
		return response;
	}

	const updatedAt = new Date().toISOString();

	books[index] = {
		...books[index],
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading,
		updatedAt,
	};

	const response = h.response({
		status: 'success',
		message: 'Buku berhasil diperbarui'
	});
	response.code(200);
	return response;
};