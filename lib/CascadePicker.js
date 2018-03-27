/* @flow */

import React from 'react'
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  InteractionManager
} from 'react-native'
import OptionButton from './OptionButton'
import MainOptionButton from './MainOptionButton'

const ALMOST_ZERO: number = 0.00000001

export type Option = {
  value: any,
  label: string
}

type Props = {
  options: Array<Option>,
  pickerText: string,
  onChange: Function,
  valueSelected?: any,
  mainColor?: string,
  selectedColor?: string,
  itemColor?: string,
  separatorColor?: string,
  selectedTextColor?: string,
  optionTextStyle?: any
}
type State = {
  isCollapsed: boolean
}

class CascadePicker extends React.Component<Props, State> {
  state: State
  _startAnimation: Function
  _height: Animated.Value
  _width: Animated.Value

  static defaultProps = {
    mainColor: 'white',
    selectedColor: 'grey',
    itemColor: 'white',
    separatorColor: 'black',
    selectedTextColor: 'blue'
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      isCollapsed: true
    }
    this._height = new Animated.Value(0)
    this._width = new Animated.Value(100)
  }

  _startAnimation = (selectedOption: ?Option) => {
    let height = ALMOST_ZERO
    let width = 100
    let collapseAnimation = Animated.timing(this._height, {
      toValue: height,
      duration: 200,
      easing: Easing.inOut(Easing.bezier(1.0, 0.0, 0.915, 1.065))
    })
    if (this.state.isCollapsed) {
      height = this.props.options.length * 44
      width = 0
      collapseAnimation = Animated.spring(this._height, {
        toValue: height,
        tension: 260,
        friction: 10
      })
    }
    Animated.parallel([
      Animated.timing(this._width, {
        toValue: width,
        duration: 150
      }),
      collapseAnimation
    ]).start()
    if (selectedOption) {
      // Pass the option selected
      InteractionManager.runAfterInteractions(() => {
        this.props.onChange(selectedOption)
      })
    }
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  _findElement = (element: Option): boolean => {
    return element.value === this.props.valueSelected
  }

  _renderChilds() {
    return this.props.options.map((optionObject: Option, index: number) => (
      <OptionButton
        option={optionObject}
        onPress={this._startAnimation}
        key={`rnjscp-option-${index}`}
        style={[
          styles.option,
          styles.separator,
          {
            backgroundColor:
              optionObject.value === this.props.valueSelected
                ? this.props.selectedColor
                : this.props.itemColor
          }
        ]}
        textStyle={this.props.optionTextStyle}>
        {optionObject.label}
      </OptionButton>
    ))
  }

  _renderButton() {
    const option: ?Option =
      this.props.valueSelected !== undefined
        ? this.props.options.find(this._findElement)
        : undefined
    return (
      <MainOptionButton
        isCollapsed={this.state.isCollapsed}
        onPress={this._startAnimation}
        style={[
          styles.option,
          styles.separator,
          {
            borderBottomColor: this.props.separatorColor,
            backgroundColor: this.props.mainColor
          }
        ]}
        textStyle={[
          styles.mainOptionText,
          { color: this.props.selectedTextColor }
        ]}>
        {option ? option.label : this.props.pickerText}
      </MainOptionButton>
    )
  }

  render() {
    return (
      <View style={{ backgroundColor: this.props.mainColor, elevation: 4 }}>
        {this._renderButton()}
        <Animated.View style={[styles.options, { height: this._height }]}>
          {this._renderChilds()}
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  options: {
    overflow: 'hidden',
    marginBottom: 0
  },
  option: {
    overflow: 'hidden'
  },
  separator: {
    borderBottomWidth: 1
  },
  optionText: {
    color: 'white'
  },
  mainOptionText: {}
})

export default CascadePicker
