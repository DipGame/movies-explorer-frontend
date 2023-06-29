import './SuccessForm.css';
import { useState } from 'react';

function SuccessForm(props) {

    return (
        <div className={`${props.isActive ? 'overlay overlay_open' : 'overlay'}`} id="overlay">
            <div className='success' name="successForm">
                <fieldset className="success__set">
                    <img className="success__lable" src={props.lable} />
                    <p className="success__title">{props.title}</p>
                </fieldset>
            </div>
        </div>
    )
}

export default SuccessForm;