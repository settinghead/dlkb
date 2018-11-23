import './index.scss'

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { papers, knodes } from '../data/';
import { KNodeViewer } from './knode'

init()

async function init() {
  const element = (
    <div className="container-fluid">
      <h1>NWW</h1>
      <hr />
      <div className="row">
        <div className="col-md">
          <h2>Knowledge Points</h2>
          <ul className="list-group">
            {knodes.map((n, i) => (
              <li className="list-group-item"
                key={i}>
                <KNodeViewer node={n} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md">
          <h2>Papers</h2>
          <ul>
            {papers.map(p => (
              <li key={p.uniqueRef}>{p.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById('app-root'));
}
