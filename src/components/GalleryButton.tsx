import React, { useEffect } from 'react';
import { Button, Alert } from 'react-native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import PermissionUtil from '../utils/PermissionUtil';
import { APP_PERMISSION_CODE } from '../common/codes/CommonCode';

interface GalleryButtonProps {
  onImageSelected: (uri: string) => void;
}

const GalleryButton: React.FC<GalleryButtonProps> = ({ onImageSelected }) => {
    useEffect(() => {
        PermissionUtil.cmmReqPermis([...APP_PERMISSION_CODE.camera, ...APP_PERMISSION_CODE.calendar, ...APP_PERMISSION_CODE.mediaLibaray]);
      }, []);
  const openGallery = async () => {

    launchImageLibrary(
      {
        mediaType: 'photo', // 이미지 선택
        selectionLimit: 1,  // 한 번에 선택할 이미지 수
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'No image was selected.');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Unknown error occurred');
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) onImageSelected(uri); // 선택된 이미지 URI를 부모로 전달
        } else {
          Alert.alert('Error', 'No assets found.');
        }
      }
    );
  };

  return (
    <Button title="Open Gallery" onPress={openGallery} color="#007bff" />
  );
};

export default GalleryButton;
