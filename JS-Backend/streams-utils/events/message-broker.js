import events from "events";

// eventEmmiter is message-broker (event bus)
const eventEmmiter = new events.EventEmitter();

export default eventEmmiter;
