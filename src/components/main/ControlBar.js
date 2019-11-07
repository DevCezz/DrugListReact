import React from 'react';

export class ControlBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <button type="button" id="addDrugBtn" className="btn btn-success" data-toggle="modal" data-target="#drugModalForm" >Dodaj</button>
                    
                    <div class="row m-0">
                        <label class="col-lg-3 col-form-label form-control-label text-right px-3">Cena: </label>
                        <div class="col-lg-4 px-0">
                            <input class="form-control" type="text" placeholder="Od" />
                        </div>
                        <label class="col-lg-1 col-form-label text-center px-0"> - </label>
                        <div class="col-lg-4 px-0">
                            <input class="form-control" type="text" placeholder="Do" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}