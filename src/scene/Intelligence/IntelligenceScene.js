/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, FlatList, ImageBackground, } from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import * as api from '../../api'
import HomeMenuView from '../Shop/HomeMenuView'
import HomeGridView1 from '../Shop/HomeGridView1'
import SpacingView from '../../widget/SpacingView'
import { Heading3 } from '../../widget/Text'
import GroupPurchaseCell from '../../scene/GroupPurchaseCell/GroupPurchaseCell'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import screen from '../../common/screen'

type Props = {

}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: Boolean,
    // refreshing: boolean,
}

class IntelligenceScene extends PureComponent<Props, State> {

    static navigationOptions = () => ({
        headerShown: false,
    })

    constructor(props: Props) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
            refreshState: RefreshState.Idle,
        }

    }

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        this.setState({ refreshing: true })
        this.requestDiscount()
        this.requestRecommend()
    }


    requestRecommend = async () => {
        try {
            let dataList = api.recommend.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: '',
                        title: '',
                        subtitle: '',
                        price: '',
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({ refreshing: false })
            alert('error ' + error)
        }
    }


    requestDiscount = async () => {
        try {

            let json = api.discount1
            this.setState({ discounts: json.data })
            // alert('test ' + JSON.stringify(json.data))
        } catch (error) {
            alert('error ' + error)
        }
    }

    onGridSelected = (index) => {
        let discount = this.state.discounts[index]
        // alert('discount ' + JSON.stringify(discount))
        if (discount.type == 1) {
            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('WebScene', { url: url })
        }
    }

    renderHeader = () => {
        return (
            <View>
                <HomeMenuView
                    menuInfos={api.menuInfos1}
                    onMenuSelected={(index) => {
                        // alert('test ' + index)
                    }}
                />
                <SpacingView />
                <HomeGridView1 infos={this.state.discounts} onGridSelected={this.onGridSelected} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>用心推荐（用于陈放智能穿戴设备文案）</Heading3>
                </View>
            </View>
        )
    }

    onCellSelected = (info: Object) => {
        // alert('test ' + JSON.stringify(info))
        this.props.navigation.navigate('GroupPurchaseScene', { info: info })
    }

    renderItem = (info: Object) => (
        <GroupPurchaseCell
            onPress={this.onCellSelected}
            info={info.item}
            style={{ width: screen.width - 20, backgroundColor: 'green', }}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={() => this.renderHeader()}
                    data={this.state.dataList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.title}
                    onRefresh={this.requestData}
                    onRefresh={
                        this.requestData
                    }
                    refreshing={this.state.refreshing}

                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.73,
        height: 30,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: -160,
    },
    recommendHeader: {
        height: 35,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white',
    },
})

export default IntelligenceScene