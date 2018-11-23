// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface,Location} from 'react-360-web';

const rapaSurface = new Surface(1440, 850, Surface.SurfaceShape.Flat);
const figureSurface = new Surface(1440, 850, Surface.SurfaceShape.Flat);
const cylinderSurface = new Surface(4096, 420, Surface.SurfaceShape.Cylinder);


class SurfacesController extends Module {
  constructor() {
    super('SurfacesController');
  }
  displayLocation(state) {
    cylinderSurface.setVisibility(state);
  }

}

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new SurfacesController()],
    ...options,
  });
  r360.renderToSurface(r360.createRoot('RapaKiwi'), cylinderSurface);

}

window.React360 = {init};
