import React from 'react';
import Page from './component/page';
import ConnectPage from './container/ConnectedPage';

import StorageWrapper from './StorageWrapper';

import catsHOC from './catsHOC';
import Req from './component/req';
import PageSecond from "./hoc";

const SimpeComp = () => (<h1>Title</h1>)
const ConnectedCats = catsHOC({ title: 'titleTest', desription:'desriptionTest'})( Page );

function App() {
  return (
    <div>
      <StorageWrapper>
          <ConnectedCats />
          <ConnectPage />
          <Page />
          <Req />
          <PageSecond />
      </StorageWrapper>
    </div>
  );
}

export default App;
