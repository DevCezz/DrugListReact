import React from 'react';
import { useForm } from '../../hooks/useForm';

export const DrugWindow = ({ onSubmitDrug, submitBtnText, modalWindowTitle }) => {
    const [drugForm, change, resetDrugForm] = useForm({
        name: '',
        price: 0,
        description: '',
        imageUrl: '',
        producer: '',
        activeSubstances: [
            {
                name: '',
                amount: ''
            },
            {
                name: '',
                amount: ''
            },
            {
                name: '',
                amount: ''
            }
        ],
        formulation: '',
        drugEffect: ''
    });

    const sumbitDrug = () => {
        onSubmitDrug({ ...drugForm });
        resetDrugForm();
    }

    return (
        <div className="modal fade" id="drugModalForm" tabIndex="-1" role="dialog" aria-labelledby="addDrugModalForm" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addDrugModalForm">{ modalWindowTitle }</h5>
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
                                    <input type="text" className="form-control" placeholder="Nazwa leku" 
                                        aria-label="Nazwa leku" aria-describedby="drugName" 
                                        name="drugName"
                                        value={ drugForm.name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugPrice">Cena</span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Cena" 
                                        aria-label="Cena" aria-describedby="drugPrice" 
                                        name="drugPrice"
                                        value={ drugForm.price }
                                        onChange={ change } />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Opis leku</span>
                                    </div>
                                    <textarea className="form-control" aria-label="Opis leku"
                                        name="drugDescription"
                                        value={ drugForm.description }
                                        onChange={ change } >                    
                                    </textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugImageUrl">Obraz URL</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Obraz URL" 
                                        aria-label="Obraz URL" aria-describedby="drugImageUrl" 
                                        name="drugImageUrl"
                                        value={ drugForm.imageUrl }
                                        onChange={ change } />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugProducer">Producent</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Producent" 
                                        aria-label="Producent" aria-describedby="drugProducer" 
                                        name="drugProducer"
                                        value={ drugForm.producer }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugFormulation">Postać leku</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Postać leku" 
                                        aria-label="Postać leku" aria-describedby="drugFormulation" 
                                        name="drugFormulation" 
                                        value={ drugForm.formulation }
                                        onChange={ change } />
                                </div>
                            </div>
                            <h6 className="my-2">1 Substancja aktywna:</h6>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceName1">Nazwa</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nazwa" 
                                        aria-label="Nazwa" aria-describedby="drugActiveSubstanceName1"
                                        name="drugActiveSubstanceName1" 
                                        value={ drugForm.activeSubstances[0].name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount1">Ilość</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount1" 
                                        name="drugActiveSubstanceAmount1"
                                        value={ drugForm.activeSubstances[0].amount }
                                        onChange={ change } />
                                </div>
                            </div>
                            <h6 className="my-2">2 Substancja aktywna:</h6>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceName2">Nazwa</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nazwa" 
                                        aria-label="Nazwa" aria-describedby="drugActiveSubstanceName2" 
                                        name="drugActiveSubstanceName2" 
                                        value={ drugForm.activeSubstances[1].name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount2">Ilość</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount2" 
                                        name="drugActiveSubstanceAmount2"
                                        value={ drugForm.activeSubstances[1].amount }
                                        onChange={ change } />
                                </div>
                            </div>
                            <h6 className="my-2">3 Substancja aktywna:</h6>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceName3">Nazwa</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nazwa" 
                                        aria-label="Nazwa" aria-describedby="drugActiveSubstanceName3" 
                                        name="drugActiveSubstanceName3"
                                        value={ drugForm.activeSubstances[2].name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount3">Ilość</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount3"
                                        name="drugActiveSubstanceAmount3" 
                                        value={ drugForm.activeSubstances[2].amount }
                                        onChange={ change } />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Działanie</span>
                                    </div>
                                    <textarea className="form-control" 
                                        aria-label="Działanie"
                                        name="drugEffect"
                                        value={ drugForm.drugEffect }
                                        onChange={ change } >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={ sumbitDrug } className="btn btn-warning">{ submitBtnText }</button>
                    </div>
                </div>
            </div>
        </div>
    );  
};