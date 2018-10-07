import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';

const Conversas = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const Contatos = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => <TabBarMenu {...props} />

  _renderScene = SceneMap({
    first: Conversas,
    second: Contatos,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get('window').width,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

});
