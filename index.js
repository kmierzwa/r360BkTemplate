import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
   asset
} from 'react-360';
import Actions from './actions/actions';
import Rstore from './stores/store';
import connectToStores from './connectToStores';
import alt from './alt';
import Button from './components/Button'
import _ from 'underscore'


const storeConnector = {
  Rstore(Store) {
    return {
      surfaceButtons: Store.getSurfaceButtonsState(),


    };
  },
};

class RapaKiwi extends React.Component {

  renderButton = (top, left, text) => <Button top={top} left={left} text={text} />
  

  componentDidMount(){
    Actions.getSurfaceButtons()
    Environment.setBackgroundImage(asset('rapa_kiwi.jpg'), { format: '2D' });
console.log('dupa',this.props.surfaceButtons)
  }
  
  render() {
    return (
      <View  >
        {console.log('sasaas', this.props.surfaceButtons)}
      {_.map(this.props.surfaceButtons, (btn) =>{
        console.log(btn)
        return this.renderButton(btn.top, btn.left, btn.text)
      })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
  //bottom:-200,
    width: 4096,
    height: 720,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 30,
  },
  buttonRapa: {
    width: 260,
    height: 200,
    position: 'absolute',
    top: 220,
    left: 1850
  },
  buttonSaintKostka: {
    width: 100,
    height: 240,
    position: 'absolute',
    top: 90,
    left: 3900
  }
});

const RapaKiwiWithStore = connectToStores(RapaKiwi, [Rstore], storeConnector);
export default RapaKiwiWithStore;
AppRegistry.registerComponent('RapaKiwi', () => RapaKiwiWithStore);


//AppRegistry.registerComponent('SaintKostkaPanel', () => SaintKostkaPanelWithStore);
//AppRegistry.registerComponent('RapaPanel', () => RapaPanel);


