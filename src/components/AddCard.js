import React from 'react';

const AddCard = (props) => {

    const fillAddCardForm = (event) => {
        const title = document.querySelector('#add-card [name="title"]').value;
        const desc = document.querySelector('#add-card textarea').value;
        if ( title && desc) {
            props.addCard({
                title: title,
                desc: desc
            });
            document.querySelector('#add-card').classList.toggle('hide');
        } else {
            alert("Enter correct values");
        }

    }

    return (
        <section className="popup hide" id="add-card">
            <div className="popup-container">
                <div id="form-add-card">
                    <label>
                        Title: <input type="text" name="title" />
                    </label>
                    <label>
                        Description: <textarea></textarea>
                    </label>
                    <button className="btn-add-card" onClick={fillAddCardForm}>Add</button>
                </div>
            </div>
        </section>
    )
}

export default AddCard;