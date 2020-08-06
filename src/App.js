import React from 'react';
import './App.css';
import TodoListContainer from "./containers/TodoListContainer";
import UndoListContainer from "./containers/UndoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
         <h4 style={{position:"fixed"}}><Link to="/">All Todo List</Link></h4>
         <h4 style={{top:20,position:"fixed"}}><Link to="/Undo">Undo List</Link> </h4>
        
        <Switch>
          <Route exact path="/" component={TodoListContainer} />
          <Route path="/Undo" component={UndoListContainer} />
        </Switch>
      </HashRouter>
      <TodoFormContainer></TodoFormContainer>
    </div>
  );
}

export default App;
