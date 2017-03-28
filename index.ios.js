const React = require('react');
const ReactNative = require('react-native');

const {
  AppRegistry,
  Text,
  View,
  MapView,
  StyleSheet
} = ReactNative;

const Api = require('./src/api');

const Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  },
  render: function() {
    return (
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={[styles.map]}
      >
      </MapView>
    );
  },
  onRegionChangeComplete: function(region){
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log(data);
        this.setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
