import React, {Component} from "react";
import Home from "./Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventoryList from "./InventoryList"
import InventoryEdit from "./InventoryEdit"
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path='/' exact={true} component={Home} />
          <Route path='/inventories' exact={true} component={InventoryList} />
          <Route path='/inventories/:id' component={InventoryEdit} />
        </Routes>
      </Router>
    )
  }
}

export default App;