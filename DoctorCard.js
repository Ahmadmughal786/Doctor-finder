import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import PhoneCallIcon from 'react-native-vector-icons/MaterialIcons';

const doctorCards = [
  {
    name: 'Dr. Emma Johnson',
    category: 'Cardiologist',
    profileImg: require('../../../assets/images/doctor.webp'),
  },
  {
    name: 'Dr. Liam Smith',
    category: 'Neurologist',
    profileImg: require('../../../assets/images/doctor.webp'),
  },
  {
    name: 'Dr. Olivia Williams',
    category: 'Pediatrician',
    profileImg: require('../../../assets/images/doctor.webp'),
  },
];

const DoctorCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.schedule_container}>
        <View style={styles.upcoming_txt_container}>
          <Text style={styles.upcoming_txt}>Upcoming Schedule</Text>
          <View style={styles.eight_txt_container}>
            <Text style={{color: '#fff', fontSize: 10}}>8</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Text style={styles.seeall_txt}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Card */}
      <View style={styles.doctor_card}>
        <View style={styles.centered}>
          <TouchableOpacity>
            <View style={styles.dr_details_centered}>
              <Image
                source={require('../../../assets/images/doctor.webp')}
                style={styles.dr_profile_img}
              />
              <View style={{paddingLeft: 5}}>
                <Text style={styles.dr_name_txt}>Dr. Alana Rueter</Text>
                <Text style={styles.expert_txt}>Dentist Consultant</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.phoneIcon_container}>
            <TouchableOpacity>
              <PhoneCallIcon name="call" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.date_time_container}></View>
      </View>

      {/* Modal */}
      <Modal visible={showModal} animationType="slide" transparent={false}>
        <View style={{backgroundColor: '#fff', flex: 0.9}}>
          <View style={styles.schedule_container}>
            <View style={styles.upcoming_txt_container}>
              <Text style={styles.upcoming_txt}>Upcoming Schedule</Text>
              <View style={styles.eight_txt_container}>
                <Text style={{color: '#fff', fontSize: 10}}>8</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Text style={styles.seeall_txt}>See Less</Text>
            </TouchableOpacity>
          </View>
          {/* Card of Modal */}
          <ScrollView>
            {doctorCards.map((item, index) => (
              <View style={{marginBottom: 10}} key={index}>
                <View style={styles.doctor_card}>
                  <View style={styles.centered}>
                    <TouchableOpacity>
                      <View style={styles.dr_details_centered}>
                        <Image
                          source={item.profileImg}
                          style={styles.dr_profile_img}
                        />
                        <View style={{paddingLeft: 5}}>
                          <Text style={styles.dr_name_txt}>{item.name}</Text>
                          <Text style={styles.expert_txt}>{item.category}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.phoneIcon_container}>
                      <TouchableOpacity>
                        <PhoneCallIcon name="call" size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.date_time_container}></View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default DoctorCard;

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
  doctor_card: {
    width: '90%',
    height: 150,
    backgroundColor: '#3457D5',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
  },
  phoneIcon_container: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
  },
  dr_details_centered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dr_profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  dr_name_txt: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  expert_txt: {
    color: '#fff',
    fontSize: 14,
  },
  date_time_container: {
    backgroundColor: '#000',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    top: 20,
    opacity: 0.3,
    borderRadius: 10,
  },
});
