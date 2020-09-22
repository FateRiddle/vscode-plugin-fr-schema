import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';

const vscode = acquireVsCodeApi();

const App = () => {
  const generator = useRef(null);
  const [templates, setTemplates] = useState([]);

  const handleSchemaChange = (schema) => {
    vscode.postMessage({
      type: 'update',
      body: JSON.stringify(schema, null, 2)
    });
  }

  const handleSaveTemplate = () => {
    setTemplates(templates.concat([
      {
        text: `模板${templates.length + 1}`,
        name: `template-${templates.length + 1}`,
        schema: generator.current.getValue().schema
      }
    ]));
  }

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
        key={templates.length}
        ref={generator}
        templates={templates}
        onSchemaChange={handleSchemaChange}
        extraButtons={[
          {
            text: '存为模板',
            onClick: handleSaveTemplate,
          }
        ]}
      />
    </div>
  );
};

export default App;
