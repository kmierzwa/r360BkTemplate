import alt from '../alt';
import Actions from '../actions/actions';

class Store {
  constructor() {
    this.state = {
      surfaceButtons: [],
    };
    this.bindActions(Actions);
    this.exportPublicMethods({
      getSurfaceButtonsState: this.getSurfaceButtonsState,
    });
  }
  onGetSurfaceButtonsSuccess(surfaceButtons) {
    console.log('onNavigateToSuccess', surfaceButtons);
    this.setState({ surfaceButtons });
  }
  getSurfaceButtonsState(){
    return this.state.surfaceButtons
  }


}
export default alt.createStore(Store, 'Rstore');
