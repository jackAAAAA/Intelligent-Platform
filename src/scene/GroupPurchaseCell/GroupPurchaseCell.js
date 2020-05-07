/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, } from 'react-native'
import { Heading2, Paragraph } from '../../widget/Text'
import color from '../../widget/color'



type Props = {
    info: Object,
    onPress: Function,
}

type State = {

}

class GroupPurchaseCell extends PureComponent<Props, State> {

    render() {
        let { info } = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0')
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.onPress(info)
            }}>
                <Image style={styles.icon} source={{ uri: imageUrl }} />
                <View style={styles.rightContainer}>
                    <Heading2>{info.title}</Heading2>
                    <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Paragraph>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Heading2 style={styles.price}>{info.price}</Heading2>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.primary,
    },
})

export default GroupPurchaseCell