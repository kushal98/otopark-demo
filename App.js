import React from 'react';
import {
  View,
  SafeAreaView,
  useColorScheme,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card} from 'react-native-paper';
import Ownership from './src/components/Ownership';
import RTO from './src/components/RTO';
import Vehicles from './src/components/Vehicles';
import Additional from './src/components/Additional';
import Important from './src/components/Important';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View>
          <Card style={styles.viewStyle}>
            <Card.Cover
              source={{
                uri: 'https://d1egxr9rlacnzd.cloudfront.net/unsafe/https://s3.ap-south-1.amazonaws.com/carinfo.cdn/cars/10/36/0/Omni.jpg',
              }}
              style={styles.imageStyle}
            />
          </Card>
          <Ownership />
          <RTO />
          <Vehicles />
          <Additional />
          <Important />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    width: '90%',
  },
  viewStyle: {
    width: '100%',
    margin: '5%',
    borderRadius: 5,
  },
  imageStyle: {
    aspectRatio: 1.767 / 1,
    width: '100%',
  },
});

export default App;
