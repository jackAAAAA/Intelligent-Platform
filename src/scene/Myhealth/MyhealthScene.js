/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, RefreshControl, ImageBackground, TouchableOpacity, } from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import color from '../../widget/color'
import { Heading2, Paragraph } from '../../widget/Text'



type Pros = {

}

type State = {
    isRefreshing: Boolean,

}

class MyhealthScene extends PureComponent<Pros, State> {

    static navigationOptions = ({ navigation }: any) => ({
        headerTitle: (
            <View>
                <Text></Text>
            </View>
        ),
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/myhealth/add2.png')}
                    onPress={() => {
                        alert('test ')
                    }}
                />

            </View>

        ),
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0,
        },
        header: false,
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000)
    }


    renderHeader = () => {
        return (
            <ImageBackground style={{ flex: 1, height: 160 }}
                source={require('../../img/tabbar/avatar.jpg')}>
                <View style={{ flexDirection: 'row' }}>
                    <NavigationItem
                        icon={require('../../img/myhealth/add4.png')}
                        onPress={() => {
                            alert('test ')
                        }}
                        iconStyle={{ marginTop: 20, marginRight: -330 }}
                    />
                </View>
                <View>
                    <Heading2 style={{ color: 'white', fontSize: 25, marginTop: -15, marginLeft: 15 }}>XXX的健康</Heading2>
                    <Paragraph style={{ color: 'white', marginTop: 10, fontSize: 15, marginLeft: 15 }}>暂无健康信息</Paragraph>
                </View>

            </ImageBackground>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }
                >
                    {this.renderHeader()}
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51d3c6'
    },
    icon: {
        width: 27,
        height: 27,
    },

})

export default MyhealthScene