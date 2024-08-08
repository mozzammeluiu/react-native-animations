/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  const translation = useRef(new Animated.ValueXY({y: 0, x: 0})).current;
  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.y, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#e0af0d',
          transform: [{translateX: translation.x}, {translateY: translation.y}],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
