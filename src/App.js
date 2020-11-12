import * as React from 'react';
import {MathpixMarkdown, MathpixLoader} from 'mathpix-markdown-it';
import { Table } from 'antd';
import {chembl} from './data/_chembl';
import 'antd/dist/antd.css';
const { Column } = Table;

function App() {
  return (
    <div className="App">
      <h1>chembl</h1>
      <MathpixLoader>

        <Table dataSource={chembl} bordered={true}>
          <Column title="CDK"
                  key="CDK"
                  width={300}
                  render={(record) => (
                    <div style={{width: '300px', overflow: 'scroll'}}>
                      <img src={`https://www.simolecule.com/cdkdepict/depict/bow/svg?smi=${encodeURI(record.trim())}&w=80&h=50&abbr=reagents&hdisp=bridgehead&showtitle=false&zoom=1.6&annotate=number`}/>

                    </div>
                  )}
          />
          <Column title="Smiles"
                  key="smiles1"
                  width={300}
                  render={(record) => (<div style={{width: '300px', overflow: 'scroll'}}>
                      <MathpixMarkdown text={`<smiles>${record}</smiles>`} smiles={{debug: true}}/>
                    </div>
                  )}
          />
          <Column title="Smiles"
                  key="smiles2"
                  width={300}
                  render={(record) => (<div style={{width: '300px', overflow: 'scroll'}}>
                    <MathpixMarkdown text={`<smiles>${record}</smiles>`}
                                                        smiles={{
                                                          ringVisualization: 'circle',
                                                          ringAromaticVisualization: 'dashed'
                                                        }}
                  />
                  </div>)}
          />
          <Column title="Smiles"
                  key="code"
                  width={300}
                  render={(record) => (<code>${record}</code>)}
          />

        </Table>
      </MathpixLoader>
    </div>
  );
}

export default App;
