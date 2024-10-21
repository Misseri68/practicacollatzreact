import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import Collatz from './Collatz';

export default class Router extends Component {
  render() {

    function ElementoParamCollatz(){
        var {numeroCollatz} = useParams();
        return <Collatz numero={numeroCollatz}></Collatz>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="Collatz/:numeroCollatz" element={<ElementoParamCollatz/>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
