import React from 'react';
import {Image} from 'react-native';

const ImageCustom = ({gambar}) => {
  return (
    <Image
      source={gambar}
      style={{width: 70, height: 70, padding: 10, alignSelf: 'center'}}
    />
  );
};
export default ImageCustom;
