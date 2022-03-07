import { IDisplayComponent } from 'react-flow-builder';

const NodeDisplay: React.FC<IDisplayComponent> = ({ node }) => {
  return (
    <div
      className={`other-node ${node.configuring ? 'node-configuring' : ''} ${
        node.validateStatusError ? 'node-status-error' : ''
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

export default NodeDisplay;
