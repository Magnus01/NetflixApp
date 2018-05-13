export default function moviesReducer(state = {

      movieslist:"",
                                          searchUrl:"",
                                          data:"",

  }, action) {

switch (action.type) {
case "SEARCH_URL":
state = {...state, searchUrl : action.payload};
break;

/////////////Top TV picks
case "DATA":

state = {...state, data: action.payload};
break;

}
return state;
}
