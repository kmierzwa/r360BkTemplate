import alt from '../alt';
import { asset, NativeModules } from 'react-360';

import _ from 'underscore';

const { SurfacesController } = NativeModules;

class Actions {
  constructor() {
    this.generateActions(
      'getSurfaceButtonsError',
      'getSurfaceButtonsSuccess',
    );
  }

  getSurfaceButtons() {
    return dispatch => {
      dispatch();
      const headers = new Headers({
        'Content-Type': 'multipart/form-data',
      });
      fetch('http://localhost:3000/buttons',headers)
        .then(response => {
          if (!response.ok) {
            this.getSurfaceButtonsError(response.body);
          } else {
            console.log('sss',response._bodyInit)
            this.getSurfaceButtonsSuccess(JSON.parse(response._bodyInit));
          }
        })
        .catch(this.getSurfaceButtonsError);
    };
  }
}

export default alt.createActions(Actions);
