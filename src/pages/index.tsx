import React, { useRef } from 'react';
import Generator from 'fr-generator';
import { useKeyPress } from 'ahooks';

const vscode = acquireVsCodeApi();

const App = () => {
  const generator: any = useRef(null);

  const handleSave = () => {
    vscode.postMessage({
      type: 'update',
      body: JSON.stringify(generator.current.getValue(), null, 2)
    });
  }

  useKeyPress(['ctrl.s', 'meta.s'], (e) => {
    e.preventDefault();
    handleSave();
  });

  vscode.postMessage({ type: 'init' });

  window.addEventListener('message', (event) => {
    const { body, type } = event.data;

    if (type !== 'update') return

    try {
      const obj = JSON.parse(body);

      if (obj && obj.schema && obj.schema.properties) {
        generator.current.setValue(obj);
      }
    } catch (err) {
      console.log(err)
    }
  });

  return (
    <div style={{height: '100vh'}}>
      <Generator
        ref={generator}
        extraButtons={[
          {
            text: '保存',
            onClick: handleSave,
          },
        ]}
      />
    </div>
  );
};

export default App;
