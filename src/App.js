import { useEffect, useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const data = {
      "teams": [{
        title: "team Red",
        desc: "lorem ispum dolar isput"
      }],
      "product": []
    }
    if(localStorage.getItem("data")){
      const storageData = JSON.parse(localStorage.getItem("data"));
      setData(storageData);
    }else{
      localStorage.setItem("data", JSON.stringify(data));
      setData(data);  
    }
    
  })
  const addList = (listName) => {
    if (Object.keys(data).includes(listName.toLowerCase())) {
      alert('Already exists');
      return false;
    }
    let obj = { ...data };
    obj[listName.toLowerCase()] = [];
    setData(obj);
  }

  const addCard = (key, cardDetail) => {
    debugger;
    const obj = { ...data };
    const listArray = obj[key];
    obj[key] = [...listArray, cardDetail];
    console.log(obj);
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
                <Board id={"board-" + index + 1} className="board" key={index} title={keyName} addCard={addCard} >
                  <div className="card-container">
                    {data[keyName].map((item, index) => {
                      return (
                        <Card id={keyName + index} key={keyName + index} className="card" draggable="true" data={item}>
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
      </main>
    </div>
  );
}

export default App;
