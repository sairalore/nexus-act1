import React from 'react';

const AniosSelector = () => {
    return (
        <div className="cine-selector">
            <label htmlFor="cine">Selecciona un categoria: </label>
            <select id="cine">
                <option value="Ficción">Madrid</option>
                <option value="Romance">Barcelona</option>
                <option value="Contemporáneo">Valencia</option>
                <option value="Drama">Valencia</option>
            </select>
        </div>
    );
};

export default AniosSelector;