const React = require('react');
const ReactNative = require('react-native');

const {
  AppRegistry,
  Text,
  View,
  MapView,
  StyleSheet
} = ReactNative;

const Weather = React.createClass({
  render: function() {
    return <MapView style={styles.map}></MapView>
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
