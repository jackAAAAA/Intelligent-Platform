/**
*Copyright (c) 2017-present, Daniel
*All rights reserved.
*
*@flow
*/
import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text, ViewPropTypes, TouchableOpacity,} from 'react-native'

type Props = {
    onPress: Function,
    disabled: Boolean,
    style: ViewPropTypes.style,
    title: String,
    titleStyle: ViewPropTypes.style,
    activeOpacity: Number,
    
}

type State = {
    
}
class Button extends PureComponent<Props, State> {

    static defaultProps = {
        disabled: false,
        activeOpacity: 0.8,
    }

    render() {
        let {onPress, disabled, style, title, titleStyle, activeOpacity} = this.props
        return (
            <TouchableOpacity
                style={[styles.container, style]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                <Text style={titleStyle}>
                    {title}
                </Text>     
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

export default Button