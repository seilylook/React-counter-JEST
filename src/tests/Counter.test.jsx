import React from 'react';

import {render, fireEvent} from '@testing-library/react';

import Counter from '../components/Counter';

describe('Counter', () => {
    const handleClick = jest.fn();

    const renderClick = () => render((
        <Counter
        count={count}
        onClick={handleClick}
        />
    ))

    it('it shows click me button', () => {
        
        expect(handleClick).not.toBeCalled();
    })
})