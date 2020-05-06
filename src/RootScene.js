/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import TabBarItem from './widget/TabBarItem'
import color from './widget/color'
import MyhealthScene from './scene/Myhealth/MyhealthScene'
import ShopScene from './scene/Shop/ShopScene'
import IntelligenceScene from './scene/Intelligence/IntelligenceScene'
import MineScene from './scene/Mine/MineScene'
// import WebScene from './scene/web/WebScene'
// import GroupPurchaseScene from './scene/GroupPurchaseCell/GroupPurchaseScene'

class RootScene extends PureComponent<{}> {

    render() {
        return (
            <Appcontainer />
        )
    }

}

const Tab = createBottomTabNavigator({
    Myhealth: {
        screen: createStackNavigator({ Myhealth: MyhealthScene }),
        navigationOptions: () => ({
            tabBarLabel: '我的健康',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_myhealthpage.png')}
                    selectedImage={require('./img/tabbar/tabbar_myhealthpage_selected.png')}
                />
            )
        })
    },
    Shop: {
        screen: createStackNavigator({ Shop: ShopScene }),
        navigationOptions: () => ({
            tabBarLabel: '商城',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_shop.png')}
                    selectedImage={require('./img/tabbar/tabbar_shop_selected.png')}
                />
            )
        })

    },
    Intelligence: {
        screen: createStackNavigator({ Intelligence: IntelligenceScene }),
        navigationOptions: () => ({
            tabBarLabel: '智能',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_intelligence.png')}
                    selectedImage={require('./img/tabbar/tabbar_intelligence_selected.png')}
                />
            )
        })
    },
    Mine: {
        screen: createStackNavigator({ Mine: MineScene }),
        navigationOptions: () => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/tabbar_mine1.png')}
                    selectedImage={require('./img/tabbar/tabbar_mine1_selected.png')}
                />
            )
        })
    }
}, {
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: color.gray,
        style: { backgroundColor: 'white' }
    }
}
)

Tab.navigationOptions = {
    header: null,
}

const AppNavigator = createStackNavigator({
    Tab: { screen: Tab },
    // WebScene: { screen: WebScene },
    // GroupPurchaseScene: { screen: GroupPurchaseScene },
}, {
    defaultNavigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333333'
    }

})

const Appcontainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({

})

export default RootScene