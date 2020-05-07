/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import HomeMenuItem from './HomeMenuItem'
import screen from '../../common/screen'
import PageControl from 'react-native-page-control'
import color from '../../widget/color'

type Props = {
    menuInfos: Array<Object>,
    onMenuSelected: Function,
}

type State = {
    currentPage: number,
}

class HomeMenuView extends PureComponent<Props, State> {

    constructor(props: Object) {
        super(props)

        this.state = {
            currentPage: 0,
        }
    }

    onScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.width)

        if (this.state.currentPage != currentPage) {
            this.setState({ currentPage: currentPage })
        }
    }

    render() {
        let { menuInfos, onMenuSelected } = this.props

        let pageCount = menuInfos.length

        let menuElements = menuInfos.map((info, index) => (
            <HomeMenuItem
                key={index}
                title={info.title}
                icon={info.icon}
                onPress={() => {
                    onMenuSelected(index)
                }}
            />
        ))

        let menuViews = []

        for (let i = 0; i < pageCount; i++) {
            let elementsPerPage = menuElements.slice(i, i + 1)
            let menuView = (
                <View key={i} style={styles.itemsView}>
                    {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.onScroll}
                >
                    {menuViews}
                </ScrollView>

                <PageControl
                    style={styles.PageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={color.primary}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screen.width,
    },
    PageControl: {
        margin: 10,
    },
})

export default HomeMenuView