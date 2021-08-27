import React from 'react'

import {render, fireEvent} from '@testing-library/react';

import Page from '../components/Page';

// export default function Page({count, onClick}) {
//     return(
//         <div>
//             <Counter count={count} onClick={onClick} />
//             <Buttons onClick={onClick}/>
//         </div>
//     )
// }

describe('Page', () => {
    it('Page', () => {
        const count = '';
        const handleClick = jest.fn();
        
        const {getByTest} = render(
            <Page
            count={count}
            onClick={handleClick}
            />
        )
    })
})