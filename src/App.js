import React, {Component} from 'react';
import Year from './components/Year'
import axios from 'axios'


class App extends Component{

  state = {
    fact: ''
  }

  componentDidMount(){
    axios.get('http://numbersapi.com/random/?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
  }



  handleChange = () => {
    axios.get('http://numbersapi.com/random?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
  }

  handleChangeMath = () => {
    axios.get('http://numbersapi.com/random/math?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
  }

  handleChangeYear = () => {
    axios.get('http://numbersapi.com/random/year?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
  }

  handleChangeDate = () => {
    axios.get('http://numbersapi.com/random/date?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
  }

  customTrivia = (number) => {
    let value = parseInt(number)
    axios.get('http://numbersapi.com/'+ value +'/trivia/?json')
    .then(res=>{
      //console.log(res.data.text)
      this.setState({
        fact: res.data.text
      })
    })
    
  }
 


render(){
  return (
    <div className="App">
      <div className="flex-container">
        <button onClick={this.handleChange}>Random Number Trivia</button>
        <button onClick={this.handleChangeMath}>Random Math Trivia</button>
        <button onClick={this.handleChangeYear}> Random Year Trivia</button>
        <button onClick={this.handleChangeDate}>Random Date Trivia</button>
        { this.state.fact }
        <p>Have a specific number in mind?</p>
        <Year customTrivia = {this.customTrivia}/>
      </div> 
    </div>
  );
}
}

export default App;
