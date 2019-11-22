import React, { memo } from 'react';

export const ControlBar = memo(({ showFormAddDrug }) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-start mb-4">
                <button type="button" id="addDrugBtn" onClick={ showFormAddDrug } className="btn btn-success" 
                    data-toggle="modal" data-target="#drugModalForm" >Dodaj</button>
                
                <div className="row m-0">
                    <label className="col-lg-3 col-form-label form-control-label text-right px-3">Cena: </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="text" placeholder="Od" />
                    </div>
                    <label className="col-lg-1 col-form-label text-center px-0"> - </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="text" placeholder="Do" />
                    </div>
                </div>
            </div>
        </div>
    );
});