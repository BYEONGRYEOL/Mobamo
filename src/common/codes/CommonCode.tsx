import { PERMISSIONS } from "react-native-permissions";

/**
 * Andriod, IOS 앱 권한 코드 
 * - calendar : 캘린더 접근 권한
 * - camera : 카메라 접근 권한
 * - microphone: 마이크 접근 권한
 * - mediaLibaray : 외부 저장소 접근 권한
 */
export const APP_PERMISSION_CODE = {
    "calendar": [PERMISSIONS.ANDROID.READ_CALENDAR, PERMISSIONS.ANDROID.WRITE_CALENDAR, PERMISSIONS.IOS.CALENDARS],
    "camera": [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.IOS.CAMERA],
    "microphone": [PERMISSIONS.ANDROID.RECORD_AUDIO, PERMISSIONS.IOS.MICROPHONE],
    "mediaLibaray": [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.IOS.MEDIA_LIBRARY],
}