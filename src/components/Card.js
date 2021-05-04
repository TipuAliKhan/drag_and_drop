import React from 'react';

const Card = (props) => {
    const dragStart = e =>{
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver =e => {
        e.stopPropagation();
    }

    return (
        <div 
        id={props.data.id} 
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <h2>{props.data.title}</h2>
            <p>{props.data.desc}</p>
            <span className="close" title="Delete card" onClick={() => props.removeCard(props.board, props.data.id)}>x</span>
        </div>
    )    
}

export default Card;