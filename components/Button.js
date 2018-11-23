import React from 'react';
import { StyleSheet, Text, VrButton, View } from 'react-360';

export default class Button extends React.Component {


  render() {
    this.styles = {
      button: {
        margin: 5,
        height: 100,
        width: 50,
        backgroundColor: 'transparent',
        zIndex: 100,
        top: this.props.top,
        left: this.props.left
      },
      text: {
        fontSize: 30,
        textAlign: 'center',
      },
    };
    return (
      <VrButton style={this.styles.button} onClick={() => this.props.callback()}>
      {console.log('left',this.props.left)}
        <Text style={this.styles.text}>

        {this.props.text}
        </Text>
      </VrButton>
    );
  }
}
