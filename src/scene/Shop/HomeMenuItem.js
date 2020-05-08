/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import screen from '../../common/screen'

type Props = {
    title: String,
    icon: any,
    onPress: Function,
}

type State = {

}

class HomeMenuItem extends PureComponent<Props, State> {

    render() {
        let { title, icon, onPress } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width,
        height: screen.width / 2,
    },
    icon: {
        width: screen.width,
        height: Math.ceil(screen.width / 2.5),
        margin: 5,
    }
})

export default HomeMenuItem