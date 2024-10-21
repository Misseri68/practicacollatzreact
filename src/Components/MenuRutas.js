import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Collatz/6">Collatz 6</a></li>
            </ul>
        </div>
    )
  }
}
