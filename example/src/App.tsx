import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  getDeviceInfo,
  getTest,
} from 'react-native-lazp-device-info';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [deviceInfo, setDeviceInfo] = useState<any>();
  const [test, setTest] = useState<any>();

  const getDevice = async () => {
    try {
      const info = await getDeviceInfo();
      setDeviceInfo(info);
    } catch (e: any) {
      console.log('LOXXI', e);
    }
  };
  const getT = async () => {
    try {
      const info = await getTest();
      setTest(info);
    } catch (e: any) {
      console.log('TEST FAIL', e);
    }
  };
  console.log('DEVICE_INFO:', deviceInfo, test);

  useEffect(() => {
    getT();
    getDevice();
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
