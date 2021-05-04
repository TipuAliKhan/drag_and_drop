import { useEffect, useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import Board from './components/Board';
import Card from './components/Card';
import AddCard from './components/AddCard';

function App() {
  const [data, setData] = useState({
    "teams": [{
      id: Math.floor(Math.random()*10000000+50000),
      title: "team Red",
      desc: "lorem ispum dolar isput"
    }],
    "product": []
  });
  const [activeBoard, setActiveBoard] = useState('');

  useEffect(() => {

    if (localStorage.getItem("data")) {
      const storageData = JSON.parse(localStorage.getItem("data"));
      setData(storageData);
    } else {
      localStorage.setItem("data", JSON.stringify(data));
      setData(data);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  },[data]);

  const addList = (listName) => {
    if (Object.keys(data).includes(listName.toLowerCase())) {
      alert('Already exists');
      return false;
    }
    let obj = { ...data };
    obj[listName.toLowerCase()] = [];
    setData(obj);
  }

  const addNewCard = (cardDetail) => {
    const obj = { ...data };
    const listArray = obj[activeBoard];
    obj[activeBoard] = [cardDetail, ...listArray];
    console.log(obj);
    setData(obj);
  }

  const toggleNewCard = (boardName) => {
    setActiveBoard(boardName);
    document.querySelector('#add-card').classList.toggle('hide');
  }

  const deleteCard = (boardName, cardId) => {
    const obj = { ...data };
    const cardsOnBoard = obj[boardName];
    const filteredCards = cardsOnBoard.filter((item) => item.id !== cardId);
    obj[boardName] = filteredCards;
    setData(obj);
  }

  const deleteBoard = (boardName) => {
    const obj = { ...data };
    delete obj[boardName];
    setData(obj);
  }

  return (
    <div className="App">
      <main className="container">
        <AddList addList={addList} />
        <div className="flexbox">
          {
            Object.keys(data).map((keyName, index) => {
              return (
                <Board id={"board-" + index + 1} className="board" key={index} title={keyName} addCard={toggleNewCard} removeBoard={deleteBoard}>
                  <div className="card-container">
                    {data[keyName].map((item, index) => {
                      return (
                        <Card id={keyName + index} key={keyName + index} className="card" draggable="true" data={item} board={keyName} removeCard={deleteCard}>
                        </Card>
                      )
                    })
                    }
                  </div>
                </Board>
              )
            })
          }

        </div>
        <AddCard addCard={addNewCard} />
      </main>
    </div>
  );
}

export default App;
