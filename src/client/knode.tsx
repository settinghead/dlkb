import * as React from 'react';
import { KNode } from '../types';
import MathJax from 'react-mathjax';
export class KNodeViewer extends React.Component<
  {
    node: KNode
  }, {

  }
  > {
  render() {
    const { node: n } = this.props;
    return (
      <MathJax.Provider>
        <div>
          {
            n.manualName
          }
          {
            n.items.map((it, idx) => (
              <div key={idx}>
                <MathJax.Node formula={it} />
              </div>
            ))
          }
        </div>
      </MathJax.Provider>

    );
  }
}
