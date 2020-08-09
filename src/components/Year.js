import React, {Component} from 'react'


class Year extends Component{

  state={
    fact: ''
}

handleChange = (e) =>{
    this.setState({
        fact: e.target.value
    })

    console.log(e.target.value, 'this one')
}

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.customTrivia(this.state.fact)
    this.setState({
      fact: ''
    })

    
}
      render(){
        return (
          <div className="Year">
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
}

export default Year;