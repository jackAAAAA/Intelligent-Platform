/**
*Copyright (c) 2020-present, jack
*All rights reserved.
*
*@flow
*/

import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView, RefreshControl, ImageBackground, TouchableOpacity, Dimensions, } from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import color from '../../widget/color'
import { Heading2, Paragraph } from '../../widget/Text'
import MHCard from '../../Card/MHCard'
import Separator from '../../resources/Separator'
import Images from '../../resources/Images'
import screen from '../../common/screen'

const ICON_SIZE = 40;
const DEFAULT_MARGIN = 10;

export default class MyhealthScene extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerShown: false
    });

    constructor(props, context) {
        super(props, context);
        this.state = {
            picture: Images.common.mihome
        };
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000)
    }

    // <TouchableOpacity style={{ flexDirection: 'row' }}>
    //                     <NavigationItem
    //                         icon={require('../../img/myhealth/add4.png')}
    //                         onPress={() => {
    //                             alert('test ')
    //                         }}
    //                         iconStyle={{ marginTop: 20, marginRight: -330 }}
    //                     />
    //                 </TouchableOpacity>

    renderHeader = () => {
        return (
            <ImageBackground style={{ flex: 1, height: 160 }}
                source={require('../../img/tabbar/avatar.jpg')}>
                <View style={styles.tagContainer}>
                    <Heading2 style={{ color: 'white', fontSize: 25, marginTop: 10, marginLeft: 15 }}>XXX的健康</Heading2>
                    <View style={{ flex: 1 }} />
                    <Image style={{ marginTop: 20, marginRight: 20, }} source={require('../../img/myhealth/add5.png')} />
                </View>
                <View>
                    <Paragraph style={{ color: 'white', marginTop: -5, fontSize: 15, marginLeft: 25 }}>暂无健康信息</Paragraph>
                </View>

            </ImageBackground>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Separator style={{ height: 0.75 }} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }
                >
                    {this.renderHeader()}
                    <View style={{ alignItems: 'center', paddingVertical: 20 }}>

                        <MHCard
                            title='我的设备（4）'
                            subtitle=''
                            rightText=''
                            marginTop={10}
                            cardType={MHCard.CARD_TYPE.NORMAL}
                            cardRadiusType={MHCard.CARD_RADIUS_TYPE.TOP}
                            onPress={_ => console.log('onPress')}
                        />

                        <View style={{ height: 50, backgroundColor: 'white' }} />

                        <Paragraph style={{ color: 'black', fontSize: 15, marginRight: 255 }}>智能穿戴第一步</Paragraph>

                        <View style={{ height: 10, backgroundColor: 'white' }} />

                        <Image style={styles.banner} source={require('../../img/myhealth/wearabledevices.png')} />

                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: DEFAULT_MARGIN
    },
    innerIcon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginRight: DEFAULT_MARGIN
    },
    innerTitle: {
        fontSize: 16,
        color: '#000'
    },
    innersubTitle: {
        fontSize: 14,
        color: '#333'
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    banner: {
        height: screen.width / 2,
        width: screen.width,

        // backgroundColor: 'red',
    },
});