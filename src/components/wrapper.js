import * as components from './index';

if (typeof Vue !== 'undefined') {
  for (const component in components) {
    Vue.component(component.name, component);
  }
}

export default components;
