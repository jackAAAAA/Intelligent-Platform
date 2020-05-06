/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/
import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import screen from '../common/screen'
import color from '../widget/color'

type Props = {

}

type State = {

}
class Separator extends PureComponent<Props, State> {

    render() {
        return (
            <View style={styles.separator} />
        )
    }

}

const styles = StyleSheet.create({
    separator: {
        width: screen.width,
        height: StyleSheet.hairlineWidth,
        backgroundColor: color.border
    }

})

export default Separator