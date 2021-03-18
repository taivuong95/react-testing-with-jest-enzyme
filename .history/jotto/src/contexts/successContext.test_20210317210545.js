import React from 'react';
import { shallow, mount } from 'enzyme';

import successContext from './successContext';

const FunctionalComponent = () => {
    successContext.useSuccess();
    return <div/>
}

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
    expect(() => {
        shallow(<FunctionalComponent />);
    }).toThrow('useSuccess must be used within a SuccessProvider')
})