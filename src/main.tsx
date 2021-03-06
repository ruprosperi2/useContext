import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainApp from "./components/MainApp";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
