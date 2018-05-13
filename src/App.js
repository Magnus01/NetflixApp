import React from 'react';

import ShowSlider from './comp/BottomSection/SimpleMapped';
import MovieToday from './comp/TopSection/MovieOfTheDay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm:"",
      searchUrl:""
    }

    this.handleChange.bind(this)
    this.handleKeyUp.bind(this)
  }

  handleKeyUp = (event) => {
    if(this.state.searchTerm !== "") //event.key === 'Enter' && 
    {
      var searchUrl =  "search/multi?query=" + this.state.searchTerm + "&api_key=166624c030b91c943c397020f20525b4";
      this.setState({
        searchUrl: searchUrl
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return (
      <div>
        <header className="Header">
      <MovieToday/>
          <div id="search" className="Search">
            <input onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.searchTerm} placeholder="Search for a title..."/>
          </div>


        </header>


        <ShowSlider title="Search Results" url={this.state.searchUrl}/>

      </div>
    )
  }
}
export default App;
