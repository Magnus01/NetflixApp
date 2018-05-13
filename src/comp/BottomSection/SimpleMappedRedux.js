import React from 'react';

class ShowSlider extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data: []
      }
    }
  
    loadContent () {
      var requestUrl ='https://api.themoviedb.org/3/' + this.props.url + '&api_key=166624c030b91c943c397020f20525b4';
      fetch(requestUrl).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({
          data: data
        })
      }).catch((err) => {
          console.log("There has been error");
        })
    }
  
    componentWillReceiveProps(nextProps) {
      if(nextProps.url !== this.props.url && nextProps.url !== ''){
        this.setState({
          url: nextProps.url
        }, function () {
            //if we update our input field by typing we want to load our content
          this.loadContent();
        })   
      }
    }
  
    render() {
      let moviestorender = '';
      if(this.state.data.results){

         moviestorender = this.state.data.results.map((movie, i) => {

          if (i < 9)
          {
            var backDrop = 'http://image.tmdb.org/t/p/original' + movie.backdrop_path;
            return (
                <div className="Item" style={{backgroundImage: 'url(' + backDrop + ')'}}></div>
            )
          }
        })
      }

      return(

        <div ref="titlecategory" className="TitleList" data-loaded={true}>
          <div className="Title">
            <div className="titles-wrapper">
                <div className="search-container">
                    {moviestorender}
                </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default ShowSlider;