import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import HeartIcon from 'react-native-vector-icons/Fontisto';

const speciality = [
  {
    name: 'Dentist',
  },
  {
    name: 'ABCD',
  },
  {
    name: 'EFGH',
  },
  {
    name: 'VBNM',
  },
];

const DoctorSpeciality = () => {
  return (
    <View>
      <View style={styles.schedule_container}>
        <Text style={styles.upcoming_txt}>Doctor Speciality</Text>
        <TouchableOpacity>
          <Text style={styles.seeall_txt}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons_container}>
        {speciality.map((item, index) => (
          <View style={styles.box} key={index}>
            <HeartIcon name="heartbeat" size={40} color="#3457D5" />
            <Text style={styles.icon_txt}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DoctorSpeciality;

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
  icons_container: {
    width: '90%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    // borderWidth: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_txt: {
    fontWeight: '500',
    fontSize: 14,
    top: 3,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3457D5',
    borderWidth: 1,
  },
});
