import React, { memo } from 'react';
import { useForm } from '../../hooks/useForm';

export const DrugWindow = memo(({ onSubmitDrug, submitBtnText, modalWindowTitle, editDrug }) => {
    var drug = {};

    if(editDrug) {
        drug = {
            name: editDrug.name,
            price: editDrug.price,
            description: editDrug.description,
            imageUrl: editDrug.imageUrl,
            producer: editDrug.producer,
            sub1name: editDrug.sub1name,
            sub1amount: editDrug.sub1amount,
            sub2name: editDrug.sub2name,
            sub2amount: editDrug.sub2amount,
            sub3name: editDrug.sub3name,
            sub3amount: editDrug.sub3amount,
            formulation: editDrug.formulation,
            drugEffect: editDrug.drugEffect
        }
    } else {
        drug = {
            name: '',
            price: 0,
            description: '',
            imageUrl: '',
            producer: '',
            sub1name: '',
            sub1amount: 0,
            sub2name: '',
            sub2amount: 0,
            sub3name: '',
            sub3amount: 0,
            formulation: '',
            drugEffect: ''
        }
    }

    const [drugForm, change, resetDrugForm] = useForm(drug);

    const submitDrug = () => {
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
                                        name="name"
                                        value={ drugForm.name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugPrice">Cena</span>
                                    </div>
                                    <input type="number" step="0.01" min="0" className="form-control" placeholder="Cena" 
                                        aria-label="Cena" aria-describedby="drugPrice" 
                                        name="price"
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
                                        name="description"
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
                                        name="imageUrl"
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
                                        name="producer"
                                        value={ drugForm.producer }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugFormulation">Postać leku</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Postać leku" 
                                        aria-label="Postać leku" aria-describedby="drugFormulation" 
                                        name="formulation" 
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
                                        name="sub1name" 
                                        value={ drugForm.sub1name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount1">Ilość</span>
                                    </div>
                                    <input className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount1" 
                                        name="sub1amount"
                                        value={ drugForm.sub1amount }
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
                                        name="sub2name" 
                                        value={ drugForm.sub2name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount2">Ilość</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount2" 
                                        name="sub2amount"
                                        value={ drugForm.sub2amount }
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
                                        name="sub3name"
                                        value={ drugForm.sub3name }
                                        onChange={ change } />
                                </div>
                                <div className="input-group input-group-sm col-sm">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="drugActiveSubstanceAmount3">Ilość</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Ilość" 
                                        aria-label="Ilość" aria-describedby="drugActiveSubstanceAmount3"
                                        name="sub3amount" 
                                        value={ drugForm.sub3amount }
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
                        <button type="button" onClick={ submitDrug } className="btn btn-warning" data-dismiss="modal">{ submitBtnText }</button>
                    </div>
                </div>
            </div>
        </div>
    );  
});