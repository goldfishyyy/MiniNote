import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
