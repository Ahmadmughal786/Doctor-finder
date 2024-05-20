import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import NotificationIcon from 'react-native-vector-icons/MaterialIcons';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import DownIcon from 'react-native-vector-icons/FontAwesome6';
import SearchIcon from 'react-native-vector-icons/Feather';
import FitlerIcon from 'react-native-vector-icons/Ionicons';
import DoctorCard from './components/DoctorCard';
import DoctorSpeciality from './components/DoctorSpeciality';
import NearbyHospitals from './components/NearbyHospitals';

const countries = [
  {
    name: 'New York, USA',
  },
  {
    name: 'Washington, USA',
  },
  {
    name: ' Texas, USA',
  },
  {
    name: 'Florida, USA',
  },
  {
    name: ' Georgia, USA',
  },
  {
    name: 'Michigan, USA',
  },
  {
    name: 'Mexico, USA',
  },
];

const notifications = [
  {
    message: 'Your Appointment booked successfully.',
  },
  {
    message: 'You have an Appointment.',
  },
  {
    message: 'You missed a call.',
  },
];

const Home = () => {
  const [selectCountry, setSelectCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('New York, USA');

  const Item = ({name}) => {
    return (
      <TouchableOpacity
        style={{padding: 15}}
        onPress={() => {
          setSelectedCountry(name);
          setSelectCountry(false);
        }}>
        <Text style={styles.select_txt}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const Separator = () => <View style={styles.menulist_separator}></View>;

  const renderItem = ({item}) => <Item name={item.name} />;
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Select Container Location */}

      <View style={styles.header_section}>
        <Text style={styles.location_txt}>Location</Text>
        <View style={styles.header_container}>
          <TouchableOpacity
            style={styles.location_btn}
            onPress={() => {
              setSelectCountry(!selectCountry);
            }}>
            <LocationIcon
              name="location-on"
              size={20}
              color="#3457D5"
              style={styles.location_icon}
            />
            <Text style={styles.selectCountry_txt}>{selectedCountry}</Text>
            <DownIcon name="angle-down" size={18} />
          </TouchableOpacity>
          <View style={styles.icon_container}>
            <NotificationIcon
              color="#000"
              name="notification-important"
              size={30}
            />
          </View>
        </View>
        {selectCountry && (
          <View style={styles.dropdown_container}>
            <FlatList
              data={countries}
              renderItem={renderItem}
              keyExtractor={(item, index) => item + index}
              ItemSeparatorComponent={Separator}
            />
          </View>
        )}
      </View>

      {/* Search Container */}
      <View style={styles.search_container}>
        <View style={styles.input_container}>
          <SearchIcon name="search" size={25} color="#1E90FF" />
          <TextInput
            style={styles.input_field}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity style={styles.filter_btn}>
          <FitlerIcon name="list" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Upcoming Schedule */}

      {/* Doctor Card */}
      <DoctorCard />
      {/* Doctor Speciality */}
      <DoctorSpeciality />

      {/* NearBy Hospitals */}
      <NearbyHospitals />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_section: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  location_txt: {
    fontSize: 14,
    color: 'gray',
  },
  icon_container: {
    width: 40,
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // marginTop: -5,
    height: 40,
  },
  location_btn: {
    // borderWidth: 1,
    flexDirection: 'row',
    // padding: 5,
    alignItems: 'center',
  },
  selectCountry_txt: {
    fontSize: 16,
    paddingRight: 6,
    paddingLeft: 3,
    color: '#000',
    fontWeight: '500',
  },
  location_icon: {
    marginLeft: -5,
  },
  dropdown_container: {
    backgroundColor: '#fff',
    width: '50%',
    top: 60,
    padding: 15,
    zIndex: 10000,
    position: 'absolute',
    left: 10,
    // borderWidth: 1,
    // borderColor: '#3457D5',
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 5,
  },
  select_txt: {
    fontSize: 14,
    color: '#000',
  },
  menulist_separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#3457D5',

    // maxWidth: '40%',
  },

  // Search Styles
  search_container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input_container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    width: '75%',
    alignItems: 'center',
    padding: 5,
    height: 50,
    borderRadius: 5,
    paddingLeft: 15,
  },
  input_field: {
    // borderWidth: 1,
    width: '90%',
    fontSize: 16,
    color: '#000',
  },
  filter_btn: {
    width: '15%',
    backgroundColor: '#3457D5',
    height: 50,
    marginLeft: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  upcoming_txt_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  eight_txt_container: {
    backgroundColor: '#3457D5',
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 5,
  },
  seeall_txt: {
    color: '#3457D5',
    fontSize: 12,
    right: 5,
  },
  // Doctor Card
});
