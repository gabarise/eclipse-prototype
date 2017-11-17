import { SLAVES_LOAD, SLAVES_UNLOAD, SLAVE_LOAD, SLAVE_UNLOAD } from '../actions';
import { createReducer } from './utils';

const initialState = {
  slaves: [],
  slave: undefined
};

const handlers = {
  [SLAVES_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [SLAVES_UNLOAD]: () => initialState,
  [SLAVE_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [SLAVE_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);