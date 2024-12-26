declare module 'react-native/Libraries/vendor/emitter/EventEmitter' {
  import {NativeEventEmitter} from 'react-native';

  const EventEmitter: NativeEventEmitter;

  export = EventEmitter;
}
