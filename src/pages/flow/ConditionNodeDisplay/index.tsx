import React from 'react';
import { IDisplayComponent } from 'react-flow-builder';

const ConditionNodeDisplay: React.FC<IDisplayComponent> = ({ node }) => {
  return (
    <div
      className={`condition-node ${
        node.configuring ? 'node-configuring' : ''
      } ${node.validateStatusError ? 'node-status-error' : ''}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

export default ConditionNodeDisplay;
