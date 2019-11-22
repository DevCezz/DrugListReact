import React, { memo } from 'react';

export const ControlBar = memo(({ showFormAddDrug, filterDrugsByPrice, limitBelow, limitAbove }) => {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-start mb-4">
                <button type="button" id="addDrugBtn" onClick={ showFormAddDrug } className="btn btn-success" 
                    data-toggle="modal" data-target="#drugModalForm" >Dodaj</button>
                
                <div className="row m-0">
                    <label className="col-lg-3 col-form-label form-control-label text-right px-3">Cena: </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="number" placeholder="Od" min="0"
                            onChange={ event => filterDrugsByPrice(event.target.value, limitAbove) }
                            onKeyUp={ event => filterDrugsByPrice(event.target.value, limitAbove) } />
                    </div>
                    <label className="col-lg-1 col-form-label text-center px-0"> - </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="number" placeholder="Do" min="0"
                            onChange={ event => filterDrugsByPrice(limitBelow, event.target.value) }
                            onKeyUp={ event => filterDrugsByPrice(limitBelow, event.target.value) } />
                    </div>
                </div>
            </div>
        </div>
    );
});