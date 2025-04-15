import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

export const setLocalData = (keyName: string, data: any) => {
  try {
    const json = JSON.stringify(data);
    storage.set(keyName, json);
  } catch (error) {
    console.error(`Failed to set data for key ${keyName}:`, error);
  }
};

export const getLocalData = <T = any>(keyName: string): T | null => {
  try {
    const data = storage.getString(keyName);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Failed to get data for key ${keyName}:`, error);
    return null;
  }
};

export const clearLocalData = () => {
  storage.clearAll();
}