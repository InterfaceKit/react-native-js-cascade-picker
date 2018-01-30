/* @flow */

import React from 'react'
import {
  View,
  Text,
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

type Props = {
  isCollapsed: boolean,
  children: string,
  onPress: Function,
  style?: any,
  textStyle?: any
}

const TouchableElement =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

class MainOptionButton extends React.PureComponent<Props> {
  _anim: Animated.Value

  static defaultProps = {
    isCollapsed: true,
    children: ''
  }

  constructor(props: Props) {
    super(props)
    this._anim = new Animated.Value(0)
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.isCollapsed) {
      Animated.timing(this._anim, {
        toValue: 0,
        duration: 200
      }).start()
    } else {
      Animated.timing(this._anim, {
        toValue: 100,
        duration: 200
      }).start()
    }
  }

  _onPressMainButton = () => {
    this.props.onPress()
  }

  render() {
    const rotate = this._anim.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '180deg']
    })
    return (
      <TouchableElement
        onPress={this._onPressMainButton}
        style={[this.props.style, styles.container]}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.children.toUpperCase()}
          </Text>
          <View style={styles.arrowContainer}>
            <Animated.Image
              style={[
                styles.arrow,
                {
                  transform: [
                    {
                      rotate
                    }
                  ]
                }
              ]}
              source={require('./img/arrow-selector.png')}
            />
          </View>
        </View>
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
  textContainer: {
    height: 44,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    paddingRight: 10
  },
  arrowContainer: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    height: 13,
    width: 13
  }
})

export default MainOptionButton
