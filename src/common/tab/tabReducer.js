const INITIAL_STATE = { selected: '' };
import { selectTab } from './tabActions';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload } 
  
    default:
      return state
  }
}