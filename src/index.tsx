import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-lazp-device-info' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const LazpDeviceInfo = NativeModules.LazpDeviceInfo
  ? NativeModules.LazpDeviceInfo
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return LazpDeviceInfo.multiply(a, b);
}

const DeviceInfoModule = NativeModules.DeviceInfoModule;
export const getDeviceInfo = async (): Promise<{
  brand: string;
  model: string;
  osVersion: string;
  name?: string;
  sdkVersion?: string;
}> => {
  return await DeviceInfoModule.getDeviceInfo();
};

export const getTest = async () => {
  return await DeviceInfoModule.getTest();
};
