import { getApp } from '@react-native-firebase/app';
import { getAnalytics, logEvent as firebaseLogEvent } from '@react-native-firebase/analytics';

const analyticsInstance = getAnalytics(getApp());

export const logEvent = async (
  eventName: string,
  params?: Record<string, any>
): Promise<void> => {
  try {
    await firebaseLogEvent(analyticsInstance, eventName, params);
  } catch (error) {
    console.error(`Failed to log event '${eventName}':`, error);
  }
};