import { Component } from 'react';

class Giphy extends Component {
    render () {
      return  (
        <div>
          <h1>Title: {this.props.movie.Title}</h1>
          
        </div>
      )
    }
  }

  export default Giphy;
