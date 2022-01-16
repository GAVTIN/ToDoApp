import React from 'react';
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
    <h2>Drag Drop To Do List</h2>
      <main className="flexbox">
        <Board id="board-1" className="board">
        <h1>To Be Done List</h1>
            <Card id="card-1" className="card" draggable="true">
                <p>NodeJS</p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
                <p>API Services</p>
            </Card>
            <Card id="card-4" className="card" draggable="true">
                <p>MongoDB</p>
            </Card>
            <Card id="card-5" className="card" draggable="true">
                <p>Redux</p>
            </Card>
        </Board>
        
        <Board id="board-2" className="board">
        <h1>Done List</h1>
            <Card id="card-2" className="card" draggable="true">
                <p>HTML/CSS</p>
            </Card>
            <Card id="card-7" className="card" draggable="true">
                <p>DOM Event Handling</p>
            </Card>
            <Card id="card-8" className="card" draggable="true">
                <p>JAVASCRIPT</p>
            </Card>
            <Card id="card-9" className="card" draggable="true">
                <p>Event Loop/Hooks</p>
            </Card>
        </Board>

      </main>
    </div>
  );
}

export default App;
