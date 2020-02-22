
import React, {Component} from 'react';
import NameForm from './NameForm'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
  
    };

  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         console.log(data);
         this.setState({
          data: data
        })
        
      })

  }

  render() {
    return ( 
      
      <div> 
        <NameForm data = {this.state["data"]} />
      </div>
      
    )
  }


}
