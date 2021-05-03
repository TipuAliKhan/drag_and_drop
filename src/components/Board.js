import React from 'react';

const Board = (props) => {
    // const [activeList, setActiveList] = useState('');

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
                <button className="add-card" onClick={() => props.addCard(props.title)}>Add</button>
            </div>
        </>
    )
}

export default Board;