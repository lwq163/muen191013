import React from 'react';
import {Provider} from "mobx-react"
import store from "./mobx"
import './App.css';
import {BrowserRouter} from "react-router-dom"
import {FnRoute,route} from "./router/index"

import "antd/dist/antd.css"


function App() {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <FnRoute route={route}></FnRoute>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
