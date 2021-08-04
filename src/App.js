import './App.css';
import { Component } from 'react';
import Giphy from './giphy'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '&t=',
      searchURL: ''
    }
  }
  handleSubmit = (event)=>{
    event.preventDefault()

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${event.target.giphy.value}&limit=25&offset=0&rating=g&lang=en`

    this.setState({
          searchURL: url
        }, () => {
          fetch(this.state.searchURL)
            .then(response => {
              return response.json()
            }).then(json => this.setState({
              giphy: json,
            }),
            err => console.log(err))
        })
  }
    render () {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='giphy'>Giphy Search</label>
            <input
              id='giphy'
              type='text'
            />
            <input
              type='submit'
              value='Find'
            />
          </form>
          {(this.state.giphy)
        ? <Giphy giphy={this.state.giphy} />
        : ''
      }
        </>
      )
    }
}

export default App;
