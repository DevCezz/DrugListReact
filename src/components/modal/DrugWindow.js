import React from 'react';

export class DrugWindow extends React.Component {
    render() {
        return (
            <div>
                <div class="modal fade" id="drugModalForm" tabindex="-1" role="dialog" aria-labelledby="addDrugModalForm" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addDrugModalForm">Dodaj lek</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugName">Nazwa</span>
                                            </div>
                                            <input type="text" name="drugName" class="form-control" placeholder="Nazwa leku" aria-label="Nazwa leku" aria-describedby="drugName" />
                                        </div>
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugPrice">Cena</span>
                                            </div>
                                            <input type="text" name="drugPrice" class="form-control" placeholder="Cena" aria-label="Cena" aria-describedby="drugPrice" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Opis leku</span>
                                            </div>
                                            <textarea name="drugDescription" class="form-control" aria-label="Opis leku"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugImageUrl">Obraz URL</span>
                                            </div>
                                            <input type="text" name="drugImageUrl" class="form-control" placeholder="Obraz URL" aria-label="Obraz URL" aria-describedby="drugImageUrl" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugProducer">Producent</span>
                                            </div>
                                            <input type="text" name="drugProducer" class="form-control" placeholder="Producent" aria-label="Producent" aria-describedby="drugProducer" />
                                        </div>
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugFormulation">Postać leku</span>
                                            </div>
                                            <input type="text" name="drugFormulation" class="form-control" placeholder="Postać leku" aria-label="Postać leku" aria-describedby="drugFormulation" />
                                        </div>
                                    </div>



                                    <h6 className="my-2">1 Substancja aktywna:</h6>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceName1">Nazwa</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceName1" class="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName1" />
                                        </div>
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceAmount1">Ilość</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceAmount1" class="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount1" />
                                        </div>
                                    </div>
                                    <h6 className="my-2">2 Substancja aktywna:</h6>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceName2">Nazwa</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceName2" class="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName2" />
                                        </div>
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceAmount2">Ilość</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceAmount2" class="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount2" />
                                        </div>
                                    </div>
                                    <h6 className="my-2">2 Substancja aktywna:</h6>
                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceName3">Nazwa</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceName3" class="form-control" placeholder="Nazwa" aria-label="Nazwa" aria-describedby="drugActiveSubstanceName3" />
                                        </div>
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="drugActiveSubstanceAmount3">Ilość</span>
                                            </div>
                                            <input type="text" name="drugActiveSubstanceAmount3" class="form-control" placeholder="Ilość" aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount3" />
                                        </div>
                                    </div>



                                    <div class="row mb-3">
                                        <div class="input-group input-group-sm col-sm">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Działanie</span>
                                            </div>
                                            <textarea name="drugEffect" class="form-control" aria-label="Działanie"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-warning">Edytuj</button>
                                <button type="button" class="btn btn-danger">Usuń</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}