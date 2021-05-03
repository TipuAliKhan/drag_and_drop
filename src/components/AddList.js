import React from 'react';

const AddList = (props) => {

    const addNewList = (event) => {
        event.preventDefault();
        const listName = document.querySelector('#add-list [name="name"]').value;

        if (listName) {
            toggleAddListPopup();
            props.addList(listName);
        } else {
            alert('Fill correct value');
        }
    }

    const toggleAddListPopup = () => {
        document.querySelector('#add-list').classList.toggle('hide');
    }

    return (
        <>
            <div className="row left">
                <button title="Add new list" className="btn-add-list" onClick={toggleAddListPopup}>Add List</button>
            </div>
            <section className="popup hide" id="add-list">
                <div className="popup-container">
                    <div id="add-list">
                        <label>
                            List Name: <input type="text" name="name" />
                        </label>
                        <button onClick={addNewList}>Add</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddList;