import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Characters, MyWatchList, EpAndLoc } from './pages';
import { episodeColumns, locationColumns} from './utils/columps'


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact component={MyWatchList} path='/'/>
        <Route component={Characters} path="/character"/>
        <Route render={() => <EpAndLoc columns={episodeColumns}/>} path='/episode/'/>
        <Route render={() => <EpAndLoc columns={locationColumns}/>} path='/location/'/>
      </Switch>
    </div>
  );
}

export default App;
