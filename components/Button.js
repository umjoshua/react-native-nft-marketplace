import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";


export const CircleButton = ({ img, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraLarge,
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
            onPress={handlePress}
        >
            <Image source={img} resizeMode="contain" style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
    )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.small,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: "center",
                }}
            >
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};