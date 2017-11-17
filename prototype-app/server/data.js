const _sessions = {};
const _notifiers = {
  task: [],
  slave: []
};

export const tasks = [
  {
    id: 'task-1',
    name: 'Initializing instance',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-2',
    name: 'Adding components',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-3',
    name: 'Testing infrastructure',
    percentComplete: 0,
    status: 'Waiting'
  },
  {
    id: 'task-4',
    name: 'Removing instance',
    percentComplete: 0,
    status: 'Waiting'
  }
];

export const slaves = [
  {
    id: 'slave-1',
    name: 'Slave 1',
    config: {
      voltages: [
        { name: 'voltage-1', value: 0 },
        { name: 'voltage-2', value: 0 },
        { name: 'voltage-3', value: 0 },
        { name: 'voltage-4', value: 0 },
        { name: 'voltage-5', value: 0 },
        { name: 'voltage-6', value: 0 },
        { name: 'voltage-7', value: 0 },
        { name: 'voltage-8', value: 0 }],
      resistances: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 },
        { name: 'resistance-3', value: 0 },
        { name: 'resistance-4', value: 0 },
        { name: 'resistance-5', value: 0 },
        { name: 'resistance-6', value: 0 },
        { name: 'resistance-7', value: 0 },
        { name: 'resistance-8', value: 0 }],
      divider: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 }
      ]
    },
    voltages: [
      { name: 'voltage-1', value: 0 },
      { name: 'voltage-2', value: 0 },
      { name: 'voltage-3', value: 0 },
      { name: 'voltage-4', value: 0 },
      { name: 'voltage-5', value: 0 },
      { name: 'voltage-6', value: 0 },
      { name: 'voltage-7', value: 0 },
      { name: 'voltage-8', value: 0 }],
    resistances: [
      { name: 'resistance-1', value: 0 },
      { name: 'resistance-2', value: 0 },
      { name: 'resistance-3', value: 0 },
      { name: 'resistance-4', value: 0 },
      { name: 'resistance-5', value: 0 },
      { name: 'resistance-6', value: 0 },
      { name: 'resistance-7', value: 0 },
      { name: 'resistance-8', value: 0 }],
    temperatures: [
      { name: 'temperature-1', value: 0 },
      { name: 'temperature-2', value: 0 }
    ]
  },
  {
    id: 'slave-2',
    name: 'Slave 2',
    config: {
      voltages: [
        { name: 'voltage-1', value: 0 },
        { name: 'voltage-2', value: 0 },
        { name: 'voltage-3', value: 0 },
        { name: 'voltage-4', value: 0 },
        { name: 'voltage-5', value: 0 },
        { name: 'voltage-6', value: 0 },
        { name: 'voltage-7', value: 0 },
        { name: 'voltage-8', value: 0 }],
      resistances: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 },
        { name: 'resistance-3', value: 0 },
        { name: 'resistance-4', value: 0 },
        { name: 'resistance-5', value: 0 },
        { name: 'resistance-6', value: 0 },
        { name: 'resistance-7', value: 0 },
        { name: 'resistance-8', value: 0 }],
      divider: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 }
      ]
    },
    voltages: [
      { name: 'voltage-1', value: 0 },
      { name: 'voltage-2', value: 0 },
      { name: 'voltage-3', value: 0 },
      { name: 'voltage-4', value: 0 },
      { name: 'voltage-5', value: 0 },
      { name: 'voltage-6', value: 0 },
      { name: 'voltage-7', value: 0 },
      { name: 'voltage-8', value: 0 }],
    resistances: [
      { name: 'resistance-1', value: 0 },
      { name: 'resistance-2', value: 0 },
      { name: 'resistance-3', value: 0 },
      { name: 'resistance-4', value: 0 },
      { name: 'resistance-5', value: 0 },
      { name: 'resistance-6', value: 0 },
      { name: 'resistance-7', value: 0 },
      { name: 'resistance-8', value: 0 }],
    temperatures: [
      { name: 'temperature-1', value: 0 },
      { name: 'temperature-2', value: 0 }
    ]
  },
  {
    id: 'slave-3',
    name: 'Slave 3',
    config: {
      voltages: [
        { name: 'voltage-1', value: 0 },
        { name: 'voltage-2', value: 0 },
        { name: 'voltage-3', value: 0 },
        { name: 'voltage-4', value: 0 },
        { name: 'voltage-5', value: 0 },
        { name: 'voltage-6', value: 0 },
        { name: 'voltage-7', value: 0 },
        { name: 'voltage-8', value: 0 }],
      resistances: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 },
        { name: 'resistance-3', value: 0 },
        { name: 'resistance-4', value: 0 },
        { name: 'resistance-5', value: 0 },
        { name: 'resistance-6', value: 0 },
        { name: 'resistance-7', value: 0 },
        { name: 'resistance-8', value: 0 }],
      divider: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 }
      ]
    },
    voltages: [
      { name: 'voltage-1', value: 0 },
      { name: 'voltage-2', value: 0 },
      { name: 'voltage-3', value: 0 },
      { name: 'voltage-4', value: 0 },
      { name: 'voltage-5', value: 0 },
      { name: 'voltage-6', value: 0 },
      { name: 'voltage-7', value: 0 },
      { name: 'voltage-8', value: 0 }],
    resistances: [
      { name: 'resistance-1', value: 0 },
      { name: 'resistance-2', value: 0 },
      { name: 'resistance-3', value: 0 },
      { name: 'resistance-4', value: 0 },
      { name: 'resistance-5', value: 0 },
      { name: 'resistance-6', value: 0 },
      { name: 'resistance-7', value: 0 },
      { name: 'resistance-8', value: 0 }],
    temperatures: [
      { name: 'temperature-1', value: 0 },
      { name: 'temperature-2', value: 0 }
    ]
  },
  {
    id: 'slave-4',
    name: 'Slave 4',
    config: {
      voltages: [
        { name: 'voltage-1', value: 0 },
        { name: 'voltage-2', value: 0 },
        { name: 'voltage-3', value: 0 },
        { name: 'voltage-4', value: 0 },
        { name: 'voltage-5', value: 0 },
        { name: 'voltage-6', value: 0 },
        { name: 'voltage-7', value: 0 },
        { name: 'voltage-8', value: 0 }],
      resistances: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 },
        { name: 'resistance-3', value: 0 },
        { name: 'resistance-4', value: 0 },
        { name: 'resistance-5', value: 0 },
        { name: 'resistance-6', value: 0 },
        { name: 'resistance-7', value: 0 },
        { name: 'resistance-8', value: 0 }],
      divider: [
        { name: 'resistance-1', value: 0 },
        { name: 'resistance-2', value: 0 }
      ]
    },
    voltages: [
      { name: 'voltage-1', value: 0 },
      { name: 'voltage-2', value: 0 },
      { name: 'voltage-3', value: 0 },
      { name: 'voltage-4', value: 0 },
      { name: 'voltage-5', value: 0 },
      { name: 'voltage-6', value: 0 },
      { name: 'voltage-7', value: 0 },
      { name: 'voltage-8', value: 0 }],
    resistances: [
      { name: 'resistance-1', value: 0 },
      { name: 'resistance-2', value: 0 },
      { name: 'resistance-3', value: 0 },
      { name: 'resistance-4', value: 0 },
      { name: 'resistance-5', value: 0 },
      { name: 'resistance-6', value: 0 },
      { name: 'resistance-7', value: 0 },
      { name: 'resistance-8', value: 0 }],
    temperatures: [
      { name: 'temperature-1', value: 0 },
      { name: 'temperature-2', value: 0 }
    ]
  }
];

export const contactorValues = ["Relais +", "Relais -", "Précharge Batterie", "Relais MPPT", "Précharge MPPT"];
export const systemStates = [
  "ACTIVE",
  "INACTIVE",
  "ERROR"
];

export const bms = {
  voltage: {
    max: 9.5,
    min: 7.2
  },
  contactors: contactorValues[2],
  state: systemStates[0]
};

export const loadBalancing = {
  config: {
    voltage: 4.5,
    current: 17
  }
};

export const battery = {
  config: {
    current: {
      in: 10.2,
      out: 3.1
    },
    capacity: 80,
    temperature: {
      max: 35,
      min: 20
    }
  },
  voltage: 12.6,
  current: 6.8,
  stateOfCharge: 87
};

const increments = [5, 10, 20, 25];

setInterval(
  () => {
    const task = tasks[
      Math.floor(Math.random() * tasks.length)
    ];

    if (!task.percentComplete) {
      task.status = 'Running';
    }

    _notifiers.task.forEach(notifier => notifier(task));
  },
  2000
);

setInterval(
  () => {
    tasks.forEach((task) => {
      if (task.status === 'Running') {
        if (task.percentComplete < 100) {
          task.percentComplete = Math.min(100, task.percentComplete +
            increments[
            Math.floor(Math.random() * increments.length)
            ]
          );
        } else {
          task.percentComplete = 0;
          task.status = 'Waiting';
        }
        _notifiers.task.forEach(notifier => notifier(task));
      }
    });
    //update slaves
    slaves.forEach((slave) => {
      slave.voltages.forEach((voltage) => {
        voltage.value = randomVoltage();
      });
      slave.resistances.forEach((resistance) => {
        resistance.value = randomResistance();
      });
      slave.temperatures.forEach((temperature) => {
        temperature.value = randomTemperature();
      })
      _notifiers.slave.forEach(function(notifier){
        notifier(slave);
      });
    });
    
  },
  140
);

function randomVoltage() {
  //voltages stay around 0.3
  return 0.3 + Math.random() * 0.2;
}

function randomResistance() {
  //resistances stay around 0.5
  return 0.5 + Math.random() * 0.1;
}

function randomTemperature() {
  //temps stay around 28
  return 28 + Math.random() * 3;
}

function isEmpty(map) {
  for(var key in map) {
     return !map.hasOwnProperty(key);
  }
  return true;
}

export function addSession(token, data) {
  _sessions[token] = data;
}

export function getSession(token) {
  return _sessions[token];
}

export function addNotifier(type, cb) {
  _notifiers[type].push(cb);
}

export function getTasks(filters) {
  if (filters) {
    return Promise.resolve({
      tasks: tasks.filter(task =>
        Object.keys(filters).some(filter => task[filter] === filters[filter])
      )
    });
  }
  return Promise.resolve({ tasks });
}

export function getTask(id) {
  let task;
  tasks.some((t) => {
    if (t.id === id) {
      task = t;
      return true;
    }
    return false;
  });
  return Promise.resolve({ task });
}

export function getSlaveModules(filters) {
  if (filters && !isEmpty(filters)) {
    return Promise.resolve({
      slaves: slaves.filter(slave =>
        Object.keys(filters).some(filter => slave[filter] === filters[filter])
      )
    });
  }
  return Promise.resolve({ slaves });
}

export function getSlaveModule(id) {
  let slave;
  slaves.some((s) => {
    if (s.id === id) {
      slave = s;
      return true;
    }
    return false;
  });
  return Promise.resolve({ slave });
}

export function getBms() {
  return Promise.resolve({ bms });
}

export function getBattery() {
  return Promise.resolve({ battery });
}

export function getLoadBalancing() {
  return Promise.resolve({ loadBalancing });
}

export default { addNotifier, addSession, getSession, getTask, getTasks, getSlaveModule, getSlaveModules, getBms, getBattery, getLoadBalancing };
