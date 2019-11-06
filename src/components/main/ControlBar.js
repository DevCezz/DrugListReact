import React from 'react';

export function ControlBar(props) {
    return (
        <div>
            <button>Dodaj</button>
            <span>Cena:</span>
            <input name="prizeFrom" />
            <span> - </span>
            <input name="prizeTo" />
        </div>
    );
}