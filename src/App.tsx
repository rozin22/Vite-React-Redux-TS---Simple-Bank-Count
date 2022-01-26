import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App" style={{ background: '#282c34', height: '100%' }}>
      <h1 style={{ color: 'white' }}> {amount}</h1>
      <button type="button" onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <button type="button" onClick={() => withdrawMoney(200)}>
        Withdraw
      </button>
      <button type="button" onClick={() => bankrupt()}>
        Bankrupt
      </button>
    </div>
  );
}

export default App;
