import RequestWatcher from './request-watcher';

let protocol = 'ws:';
if (window.location.protocol === 'https:') {
  protocol = 'wss:';
}
const host = ((process.env.NODE_ENV === 'development') ?
  'localhost:8102' : `${window.location.host}`);
const webSocketUrl = `${protocol}//${host}`;

const socketWatcher = new RequestWatcher({ webSocketUrl });

let slavesWatcher;

export function watchSlaves() {
  slavesWatcher = socketWatcher.watch('/api/slave');
  return slavesWatcher;
}

export function unwatchSlaves() {
  if (slavesWatcher) {
    slavesWatcher.stop();
  }
}

const slaveWatcher = {};

export function watchSlave(id) {
  slaveWatcher[id] = socketWatcher.watch(`/api/slave/${id}`);
  return slaveWatcher[id];
}

export function unwatchSlave(id) {
  if (slaveWatcher[id]) {
    slaveWatcher[id].stop();
  }
}
