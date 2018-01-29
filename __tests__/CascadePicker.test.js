import 'react-native'
import React from 'react'
import CascadePicker from '../lib/CascadePicker'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <CascadePicker
        options={[{ value: 2, label: 'Dos' }, { value: 4, label: 'Cuatro' }]}
        valueSelected={2}
        onChange={() => null}
        pickerText='Hola'
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
