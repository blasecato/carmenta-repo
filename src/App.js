import React from 'react';
import { Public } from "./scenes/Layout/Public/Public";
import { Private } from "./scenes/Layout/Private/Private";
import { useSelector } from 'react-redux';


export const App = ({history}) => {
  const { authentication } = useSelector(state => state.auth)
  return (
    <div className="App">
      {!authentication && <Public />}
      {authentication && <Private />}
    </div>
  );
}

export default App;
