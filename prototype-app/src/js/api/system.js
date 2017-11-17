import RequestWatcher from './request-watcher';

let protocol = 'ws:';
if (window.location.protocol === 'https:') {
  protocol = 'wss:';
}
const host = ((process.env.NODE_ENV === 'development') ?
  'localhost:8102' : `${window.location.host}`);
const webSocketUrl = `${protocol}//${host}`;

const socketWatcher = new RequestWatcher({ webSocketUrl });

let batteryWatcher, bmsWatcher, loadBalancingWatcher;

export function watchBattery() {
  batteryWatcher = socketWatcher.watch('/api/battery');
  return batteryWatcher;
}

export function unwatchBattery() {
  if (batteryWatcher) {
    batteryWatcher.stop();
  }
}

export function watchBms() {
  bmsWatcher = bmsWatcher.watch('/api/bms');
  return bmsWatcher;
}

export function unwatchBms() {
  if (bmsWatcher) {
    bmsWatcher.stop();
  }
}

export function watchLoadBalancing() {
  loadBalancingWatcher = loadBalancingWatcher.watch('/api/bms');
  return loadBalancingWatcher;
}

export function unwatchLoadBalancing() {
  if (loadBalancingWatcher) {
    loadBalancingWatcher.stop();
  }
}


