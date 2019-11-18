import React from 'react';

export class DrugWindow extends React.Component {
    render() {
        return (
            <div className="modal fade" id="drugModalForm" tabIndex="-1" role="dialog" aria-labelledby="addDrugModalForm" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addDrugModalForm">Dodaj lek</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugName">Nazwa</span>
                                        </div>
                                        <input type="text" name="drugName" className="form-control" placeholder="Nazwa leku" aria-label="Nazwa leku" aria-describedby="drugName" />
                                    </div>
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugPrice">Cena</span>
                                        </div>
                                        <input type="text" name="drugPrice" className="form-control" placeholder="Cena" aria-label="Cena" aria-describedby="drugPrice" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Opis leku</span>
                                        </div>
                                        <textarea name="drugDescription" className="form-control" aria-label="Opis leku"></textarea>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugImageUrl">Obraz URL</span>
                                        </div>
                                        <input type="text" name="drugImageUrl" className="form-control" placeholder="Obraz URL" aria-label="Obraz URL" aria-describedby="drugImageUrl" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugProducer">Producent</span>
                                        </div>
                                        <input type="text" name="drugProducer" className="form-control" placeholder="Producent" aria-label="Producent" aria-describedby="drugProducer" />
                                    </div>
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugFormulation">Postać leku</span>
                                        </div>
                                        <input type="text" name="drugFormulation" className="form-control" placeholder="Postać leku" aria-label="Postać leku" aria-describedby="drugFormulation" />
                                    </div>
                                </div>
                                <h6 className="my-2">1 Substancja aktywna:</h6>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceName1">Nazwa</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceName1" className="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName1" />
                                    </div>
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceAmount1">Ilość</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceAmount1" className="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount1" />
                                    </div>
                                </div>
                                <h6 className="my-2">2 Substancja aktywna:</h6>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceName2">Nazwa</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceName2" className="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName2" />
                                    </div>
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceAmount2">Ilość</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceAmount2" className="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount2" />
                                    </div>
                                </div>
                                <h6 className="my-2">3 Substancja aktywna:</h6>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceName3">Nazwa</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceName3" className="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName3" />
                                    </div>
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="drugActiveSubstanceAmount3">Ilość</span>
                                        </div>
                                        <input type="text" name="drugActiveSubstanceAmount3" className="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="input-group input-group-sm col-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Działanie</span>
                                        </div>
                                        <textarea name="drugEffect" className="form-control" aria-label="Działanie"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning">Edytuj</button>
                            <button type="button" className="btn btn-danger">Usuń</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}