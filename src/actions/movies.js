export function searchUrl(data) {
    return dispatch => {
      dispatch({
        type: "SEARCH_URL",
        payload: data
      });
    };
  }


// export function loadContent(requestUrl) {
//     fetch(requestUrl).then((response) => {
//         return response.json();
//     }).then((data) => {
//         return dispatch => {
//             dispatch({
//                 type: "SEARCH_URL",
//                 payload: data
//             });
//         };
//     }).catch((err) => {
//         console.log("There has been error");
//     })
//
// }

// export function loadContent(requestUrl) {
//     return (dispatch) => {
//
//         fetch(requestUrl).then((response) => {
//            return response.json();
//                 dispatch({type: "SEARCH_URL", payload: response.url});
//             })
//             .catch((error) => {
//                 console.log("There has been error");
//             });
//     }
// }

export function loadContent(requestUrl) {
    return (dispatch) => {

        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            // this.setState({
            //   data: data
            // })
            //
            dispatch({type: "DATA", payload: data});
        }).catch((err) => {
            console.log("There has been error");
        })
    }
}