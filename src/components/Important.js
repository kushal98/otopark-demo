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
        <Card.Title title="Important Dates" titleStyle={styles.titleStyle} />
        <Card.Content>
          {data.map((item, index) => {
            if (keyList.includes(item.key)) {
              return (
                <View key={index}>
                  <Title style={styles.subTitleStyle}>{item.key}</Title>
                  <Paragraph style={styles.paragraphStyle}>
                    {item.value}
                  </Paragraph>
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
  titleStyle: {
    fontSize: 18,
    color: '#42BBBE',
  },
  subTitleStyle: {
    fontWeight: '300',
    fontSize: 12,
    color: '#42413F',
  },
  paragraphStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    marginTop: -5,
  },
});

export default Important;
