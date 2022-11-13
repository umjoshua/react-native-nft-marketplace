import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      margin: SIZES.base,
      marginBottom: SIZES.extraLarge,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image source={data.image} resizeMode="cover" style={{
          height:'100%',
          width:'100%',
          borderTopLeftRadius:SIZES.font,
          borderTopRightRadius:SIZES.font,
        }} />
      </View>

      <Text>{data.name}</Text>
    </View>
  )
}

export default NFTCard