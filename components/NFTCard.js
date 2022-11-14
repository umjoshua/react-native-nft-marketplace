import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { EthPrice, NFTTtitle, SubInfo } from './SubInfo'

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
          height: '100%',
          width: '100%',
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
        }} />
      </View>
      <CircleButton position='absolute' right={10} top={10} img={assets.heart} />
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTtitle
          title={data.name}
          subTitle={data.creator}
          subTitleSize={SIZES.small}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.font,
        marginBottom: SIZES.font,
        alignItems: 'center',
      }}>
        <EthPrice price={data.price} />
        <RectButton />
      </View>
    </View>
  )
}

export default NFTCard