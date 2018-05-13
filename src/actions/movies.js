export function searchUrl(data) {
    return dispatch => {
      dispatch({
        type: "SEARCH_URL",
        payload: data
      });
    };
  }
