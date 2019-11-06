import React from 'react';

export function ControlBar(props) {
    return (
        <div>
            <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-success">Dodaj</button>
                <div class="form-group">
                    <label for="customRange1">Cena:</label>
                    <input type="range" class="custom-range" id="customRange1" />
                </div>
            </div>
        </div>
    );
}