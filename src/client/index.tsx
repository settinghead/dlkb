import './index.scss'

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import papers from '../data/papers';

init()

async function init() {
  const element = (
    <div class="container-fluid">
      <h1>xkb</h1>
      <hr />
      <h2>Papers</h2>
      <ul>
        {papers.map(p => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
  ReactDOM.render(element, document.getElementById('app-root'));
}
