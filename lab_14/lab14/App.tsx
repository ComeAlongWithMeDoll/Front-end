import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {
  const [lab, setLab] = useState<'14.1' | '14.2'>('14.1');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setLab('14.1')} style={styles.navBtn}>
          <Text style={{color: lab === '14.1' ? 'blue' : 'black'}}>Lab 14.1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLab('14.2')} style={styles.navBtn}>
          <Text style={{color: lab === '14.2' ? 'blue' : 'black'}}>Lab 14.2</Text>
        </TouchableOpacity>
      </View>
      
      {lab === '14.1' ? <ContactsScreen /> : <RegistrationScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: { 
    flexDirection: 'row', 
    paddingTop: 50, 
    justifyContent: 'space-around', 
    backgroundColor: '#eee',
    paddingBottom: 10 
  },
  navBtn: { padding: 10 }
});