/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import SpacingView from '../../widget/SpacingView'
import color from '../../widget/color'
import DetailCell from '../../widget/DetailCell'
import { Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen'
import Button from '../../widget/Button'

type Pros = {

}

type State = {
    isRefreshing: Boolean,

}

class MineScene extends PureComponent<Pros, State> {

    static navigationOptions = ({ navigation }: any) => ({
        headerShown: false
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
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={require('../../img/mine/avatar.png')}
                />
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                        <Heading2 style={{ color: 'white', }}>用户名字</Heading2>
                        <Image source={require('../../img/mine/beauty_technician_v15.png')} />
                    </View>

                    <Image style={styles.arrow} source={require('../../img/public/cell_arrow.png')} />

                    <Paragraph style={{ color: 'white', marginTop: -15 }}>设备数量</Paragraph>

                </TouchableOpacity>
            </View>

        )
    }

    getDataList() {
        return (
            [
                [
                    { title: '我的商城', subtitle: '', image: require('../../img/mine/shop.png') },
                    
                ],
                [
                    { title: '用户协议', image: require('../../img/mine/useragreement1.png') },
                    { title: '用户体验计划', image: require('../../img/mine/user_experience.png') },
                ],
                [
                    { title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png') },
                    { title: '关于创鑫互联', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png') }
                ]
            ]
        )
    }

    renderCells() {

        let cells = []
        let dataList = this.getDataList()

        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = (
                    <DetailCell
                        key={data.title}
                        title={data.title}
                        subtitle={data.subtitle}
                        image={data.image}
                    />
                )
                cells.push(cell)
            }
            cells.push(
                <Text style={{height: 25, backgroundColor: color.paper,}} key={i} />
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.paper }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.primary }} />
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
                    <Text style={{height: 25, backgroundColor: color.paper,}} />
                    {this.renderCells()}
                    <Text style={{height: 25, backgroundColor: color.paper,}} />
                    <Button
                            title='撤销授权'
                            titleStyle={{ color: 'white', fontSize: 25 }}
                            style={styles.buyButton}
                        />
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        height: 130,
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
        marginTop: 25,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51d3c6'
    },
    icon: {
        width: 27,
        height: 27,
    },
    arrow: {
        height: 14,
        width: 14,
        marginLeft: 318,
        marginBottom: 3,
        marginTop: 3,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    buyButton: {
        backgroundColor: 'red',
        width: 200,
        height: 50,
        borderRadius: 7,
        marginLeft: 110,
    },

})

export default MineScene