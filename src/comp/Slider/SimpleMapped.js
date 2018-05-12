import React from 'react';

class SearchSlider extends React.Component {
    constructor(props){
      super(props)

    }

  render() {
      return (
      <div className="main">
        <div className="wrapper">
          <div className="search-container">
             {this.props.imgContainer}
          </div>

        </div>
      </div>
    )
    }
  }
  export default SearchSlider;