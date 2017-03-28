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
    const pins = [{
      latitude: 37,
      longitude: -95
    }];

    return (
      <MapView
        annotations={pins}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={[styles.map]}
      >
      </MapView>
    );
  },
  onRegionChangeComplete: function(region){

  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
