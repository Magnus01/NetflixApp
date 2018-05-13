export default function moviesReducer(state = {


    //mine
      movieslist:"",

  }, action) {

switch (action.type) {
case "SEARCH_URL":
state = {...state, searchUrl : action.payload};
break;

/////////////Top TV picks
case "TOPTV":

state = {...state, movieslist: action.payload};
break;

}
return state;
}
