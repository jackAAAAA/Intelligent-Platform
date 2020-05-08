/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color'
import { Heading2, Heading3 } from '../../widget/Text'

type Props = {
    info: Object,
    onPress: Function,
}

type State = {

}

class HomeGridItem extends PureComponent<Props, State> {

    render() {

        let { info, } = this.props
        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image style={styles.icon} source={{ uri: imageUrl }} />
                    <Heading2 style={{ color: color }}>{title}</Heading2>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 3 - StyleSheet.hairlineWidth,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: 9 * StyleSheet.hairlineWidth,
        borderColor: color.border,
    },
    icon: {
        width: screen.width / 6,
        height: screen.width / 6,
        // backgroundColor: 'blue',

    },

})

export default HomeGridItem