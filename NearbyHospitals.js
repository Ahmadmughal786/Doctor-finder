import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
const hospitals = [
  {
    name: 'Mercy Hospital',
    hosImg: require('../../../assets/images/hospital.webp'),
  },
  {
    name: ' Medical Center',
    hosImg: require('../../../assets/images/hospital.webp'),
  },
  {
    name: 'Green Hospital',
    hosImg: require('../../../assets/images/hospital.webp'),
  },
];

const NearbyHospitals = () => {
  return (
    <View>
      <View style={styles.schedule_container}>
        <Text style={styles.upcoming_txt}>Nearby Hospitals</Text>
        <TouchableOpacity>
          <Text style={styles.seeall_txt}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        snapToInterval={330}
        snapToAlignment={'center'}>
        {hospitals.map((item, index) => (
          <View>
            <View style={styles.hospital_card} key={index}>
              <Image
                source={require('../../../assets/images/hospital.webp')}
                resizeMode="cover"
                style={styles.hospital_img}
              />
              <Text style={{fontSize: 18, color: '#000', fontWeight: '500'}}>
                {item.name}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NearbyHospitals;

const styles = StyleSheet.create({
  upcoming_txt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  schedule_container: {
    marginHorizontal: 20,
    marginVertical: 10,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  seeall_txt: {
    color: '#3457D5',
    fontSize: 12,
    right: 5,
  },
  hospital_card: {
    width: 300,
    height: 160,
    // backgroundColor: 'red',
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3457D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hospital_img: {
    width: 295,
    height: 120,
  },
});
