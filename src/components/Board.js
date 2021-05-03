import React, { useEffect, useState } from 'react';

const Board = (props) => {
    const [activeList, setActiveList] = useState('');
    
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    const addNewCard = () => {
        const title =document.querySelector('#add-card [name="title"]').value;
        const desc =document.querySelector('#add-card textarea').value;
        if( title && desc){
            props.addCard("teams", {
                title: title,
                desc: desc
            });
            document.querySelector('#add-card').classList.toggle('hide');
        }else{
            alert("Enter correct values");
        }
        
    }

    useEffect(() => {
        document.querySelector('#add-card').classList.toggle('hide');
    },[activeList])

    const toggleNewCard = (listName) =>{
        setActiveList(listName);
    }
    return (
        <>
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            <h2 className="board-title">{props.title}</h2>
            {props.children}
            <button className="add-card" onClick={() => toggleNewCard(props.title)}>Add</button>
        </div>
        
        <section className="popup hide" id="add-card">
                <div className="popup-container">
                    <div id="add-card">
                        <label>
                            Title: <input type="text" name="title" />
                        </label>
                        <label>    
                            Description: <textarea></textarea>
                        </label>
                        <button className="btn-add-card" onClick={addNewCard}>Add</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Board;