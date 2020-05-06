/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/

import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

type Pros = {
    normalImage: any,
    selectedImage: any,
    focused: boolean,
    tintColor: any,
}

type State = {

}

class TabBarItem extends PureComponent<Pros, State> {

    render() {
        let { normalImage, selectedImage, focused, tintColor } = this.props
        return (
            <Image
                source={focused ? selectedImage : normalImage}
                style={{ width: 25, height: 25, tintColor: tintColor }}
            />
        )
    }

}

const styles = StyleSheet.create({

})

export default TabBarItem