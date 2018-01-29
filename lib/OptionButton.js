/* @flow */

import React from 'react'
import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

import type { Option } from './CascadePicker'

const TouchableElement =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

type Props = {
  onPress: Function,
  option: Option,
  style: any,
  textStyle?: any,
  children: string
}

class OptionButton extends React.Component<Props> {
  _onPressElement = () => {
    this.props.onPress(this.props.option)
  }

  render() {
    return (
      <TouchableElement
        onPress={this._onPressElement}
        style={[this.props.style, styles.container]}>
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.children.toUpperCase()}
        </Text>
      </TouchableElement>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: Platform.select({
    ios: {
      textAlign: 'center'
    },
    android: {
      textAlign: 'center',
      flex: 1
    }
  })
})

export default OptionButton
