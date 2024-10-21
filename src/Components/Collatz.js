import React, { Component } from 'react'

export default class Collatz extends Component {

    numeroCollatz = parseInt(this.props.numero);

    state = {
        secuencia: []
    }

    calcularSecuencia = () => {
        var aux = [this.numeroCollatz];
        var ultimoNumero = aux[aux.length -1]
        while(ultimoNumero > 1){
            if(ultimoNumero % 2 == 0){
                aux.push(ultimoNumero/2);
                console.log(ultimoNumero + "entre 2" );
            }else{
                aux.push(ultimoNumero*3 +1);
                console.log("Hola")
            }
            ultimoNumero = aux[aux.length -1]

        }
        this.setState({secuencia:aux })
    }

   

  render() {
    return (
      <div>
        <h1>Secuencia Collatz del número: {this.numeroCollatz}</h1>
        <button onClick={this.calcularSecuencia}>Mostrar secuencia!</button><br/>
        <ul>
            {this.state.secuencia.map((numero, index) => {
                return <li key={index}>{numero}</li>
            })}
        </ul>
      </div>
    )
  }
}
