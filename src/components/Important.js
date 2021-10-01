import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {importantDetails} from '../utils';

function Important(props) {
  let data;
  const fillData = () => {
    data = importantDetails();
  };

  fillData();

  let keyList = [
    'Registration date',
    'Vehicle Age',
    'Fitness upto',
    'Insurance expiry (tentative)',
  ];

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title title="Important Dates" />
        <Card.Content>
          {data.map((item, index) => {
            if (keyList.includes(item.key)) {
              return (
                <View key={index}>
                  <Title>{item.key}</Title>
                  <Paragraph>{item.value}</Paragraph>
                </View>
              );
            }
          })}
          {/* <FlatList
            data={data}
            renderItem={({item}) => {
              if (keyList.includes(item.key)) {
                return (
                  <View>
                    <Title>{item.key}</Title>
                    <Paragraph>{item.value}</Paragraph>
                  </View>
                );
              }
            }}
            keyExtractor={item => item.id}
          /> */}
        </Card.Content>
        {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    viewStyle: {
      width: '100%',
      margin: '5%',
      borderRadius: 15,
    },
  });

export default Important;
