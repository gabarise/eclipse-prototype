import { SLAVES_LOAD, SLAVES_UNLOAD, SLAVE_LOAD, SLAVE_UNLOAD } from '../actions';
import {
  watchSlaves, unwatchSlaves, watchSlave, unwatchSlave
} from '../api/slaves';

export function loadSlaves() {
  return dispatch => (
    watchSlaves()
      .on('success',
        payload => dispatch({ type: SLAVES_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: SLAVES_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadSlaves() {
  unwatchSlaves();
  return { type: SLAVES_UNLOAD };
}

export function loadSlave(id) {
  return dispatch => (
    watchSlave(id)
      .on('success',
        payload => dispatch({ type: SLAVE_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: SLAVE_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadSlave(id) {
  unwatchTask(id);
  return { type: SLAVE_UNLOAD };
}
