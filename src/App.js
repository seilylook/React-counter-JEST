import React, {useState} from 'react';

import Page from './components/Page';

export default function App () {

  const [state, setState] = useState({
    count : 0,
  });

  const {count } = state;

  function handleClick (increment) {
    setState({
      count: count + increment,
    })
  }
  return(
    <div>
      <h1>Counter</h1>
      <Page count={count} onClick={handleClick} />
    </div>
  )
}