import React from 'react';
import { connect } from "react-redux";

import {loadContent} from '../../actions/movies';

class ShowSlider extends React.Component {
    constructor(props){
      super(props)
      // this.state = {
      //   data: []

        // this.loadContent = this.loadContent.bind(this);
    }
    // //
    // loadContent (requestUrl) {
    //     this.props.loadContent(requestUrl);
    //   // var requestUrl ='https://api.themoviedb.org/3/' + this.props.url + '&api_key=166624c030b91c943c397020f20525b4';
    //   // fetch(requestUrl).then((response) => {
    //   //   return response.json();
    //   // }).then((data) => {
    //   //   this.setState({
    //   //     data: data
    //   //   })
    //   // }).catch((err) => {
    //   //     console.log("There has been error");
    //   //   })
    // }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'nextProps');
      if(nextProps.url !== this.props.url && nextProps.url !== ''){
        this.setState({
          url: nextProps.url
        }, function () {
            //if we update our input field by typing we want to load our content
            var requestUrl ='https://api.themoviedb.org/3/' + nextProps.url + '&api_key=166624c030b91c943c397020f20525b4';
            console.log(requestUrl, 'requestUrl');
            this.props.loadContent(requestUrl);
            // this.loadContent(requestUrl);
            // alert('hi');

        })
      }
    }

    render() {
      let moviestorender = '';
      if(this.props.movies.data.results){

         moviestorender = this.props.movies.data.results.map((movie, i) => {

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

function mapStateToProps(state) {
    console.log();
    return {
        movies: state.movies
    }
}

  export default connect(mapStateToProps, {loadContent})(ShowSlider);