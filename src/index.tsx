import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { History, createBrowserHistory } from 'history';

import App from './App';

let mountId: string | undefined;

window['weddingtimeline_mount'] = (id = 'root', history: History<unknown>, sessionData) =>
  new Promise((resolve) => {
    mountId = id;
    const browserHistory = history || createBrowserHistory();
    ReactDOM.render(
      (<App history={browserHistory} sessionData={sessionData} />) as ReactElement,
      document.getElementById(id),
      () => resolve(true),
    );
  });

window['weddingtimeline_unmount'] = () => {
  if (mountId) {
    const mountNode = document.getElementById(mountId);
    if (mountNode) {
      return Promise.resolve(ReactDOM.unmountComponentAtNode(mountNode));
    }
  }
  return Promise.resolve(false);
};
