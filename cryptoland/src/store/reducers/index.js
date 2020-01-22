import {
  // ==== SET WINDOW SIZE ===
  WIDTH_RESIZE,
  // ==== SET Navbar Location ===
  NAVBAR_LOCATION,
  // ==== Confirm Landing page has loaded in ===
  LP_LOADED,
} from '../actions'

const initialState = {
  // ==== SET WINDOW SIZE ===
  width: 0,
  isInHero: true,
  lpLoadedIn: false
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
// ==================================================================
// ==== SET WINDOW SIZE ===
    case WIDTH_RESIZE:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height
      };
// ==================================================================
// ==== SET WINDOW SIZE ===
    case NAVBAR_LOCATION:
      return {
        ...state,
        isInHero: action.payload
      };
// ==================================================================
// ==== confirm landing page has loaded in ===
    case LP_LOADED:
      return {
        ...state,
        lpLoadedIn: action.payload
      };
        default:
        return state;
    }
}

export default reducer
