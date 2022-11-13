import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, NFTData } from '../constants';
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary}></FocusedStatusBar>
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => <NFTCard data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={HomeHeader}
                    />
                </View>
                <View style={{
                    zIndex: -1,
                    position: "absolute",
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home