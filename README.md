# react-native-js-cascade-picker

<p>
<img src="https://img.shields.io/npm/dm/react-native-js-cascade-picker.svg" />
<img src="https://img.shields.io/npm/dt/react-native-js-cascade-picker.svg" />
<img src="https://travis-ci.org/InterfaceKit/react-native-js-cascade-picker.svg?branch=master" />
</p>

A pure JavaScript animated component that renders a picker with a cascade effect. Useful for navigation bars.

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/InterfaceKit/react-native-js-cascade-picker/ios.gif" alt="iOS" width="400" />
<img
</p>

## Getting started

`$ yarn add react-native-js-cascade-picker`

## Usage

```jsx
import CascadePicker from 'react-native-js-cascade-picker'

// Render your component
<CascadePicker
  options={[{ value: 2, label: 'Two' }, { value: 4, label: 'Four' }]}
  valueSelected={this.state.val}
  onChange={(option: ?Object) => {
    if (option) {
      this.setState({ val: option.value })
    }
  }}
  pickerText='Select one'
/>
```

## API

| Props               | Type            | Description                          | Required |
| ------------------- | --------------- | ------------------------------------ | -------- |
| `options`           | `Array<Option>` |                                      | **Yes**  |
| `pickerText`        | `string`        |                                      | **Yes**  |
| `onChange`          | `Function`      | Returns an `Option`.                 | **Yes**  |
| `valueSelected`     | `any`           | A value to match into the `Option`s. |
| `mainColor`         | `string`        |                                      |
| `selectedColor`     | `string`        | Color for the selected item.         |
| `itemColor`         | `string`        | Color for the items.                 |
| `separatorColor`    | `string`        | Color for the separator.             |
| `selectedTextColor` | `string`        |                                      |
| `optionTextStyle`   | `any`           | Style for the text option.           |

## License

MIT.

## Author

Álvaro Medina Ballester `<amedina at apsl.net>`

Built with 💛 by [APSL](https://github.com/apsl).
