import React from 'react';

const Book = ({book}) => {
    return (
        <div className="movie">
            <h2>{book.nombre}</h2>
            <p><strong>Autor:</strong> {book.autor}</p>
            <p><strong>Actores:</strong> {book.votos}</p>
            <p><strong>Categorías:</strong> {book.categoria}</p>
            <div className="sessions">
                {book.sessions.map((session, index) => (
                    <button key={index}>{session}</button>
                ))}
            </div>
        </div>
    );
};
export default Book;

