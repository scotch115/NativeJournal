/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
	WebView
} from 'react-native-webview';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
	UserAgent,
} from 'rn-ios-user-agent';


class App extends Component {
		state = {
			url: "https://react-journal-cf451.web.app",
		};

  render () {
		return(
		<SafeAreaView style={{ flex: 1 }}>
        <WebView
				source={{
					uri: this.state.url,
					headers: {"custom-app-header":"NativeJournal"}
					}}
				style={{marginTop: 20, width: "100%", height: "100%"}}
				applicationNameForUserAgent={'Journal/0.0.1'}
				userAgent='Mozilla/5.0 (iphone; cpu iphone os 13_0 like mac os x) AppleWebKit/605.1.15 (khtml, like gecko) version/13.1 mobile/15e148 safari/604.1'
				domStorageEnabled={true}
				javaScriptEnabled={true}
				startInLoadingState={true}
				// onLoadStart={(navState) => this.setState({url: navState.nativeEvent.url})}
				bounces={true}
				/>
		</SafeAreaView>
  	);
	}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

module.exports = App;
