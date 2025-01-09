const events = {};

function subscribe(eventName, handler) {
  if (!events[eventName]) {
    events[eventName] = [];
  }
  events[eventName].push(handler);
}

function publish(eventName, data) {
  // events[eventName] returns an array with functions
  events[eventName].forEach((handler) => handler());
}

export default {
  subscribe,
  publish,
};
