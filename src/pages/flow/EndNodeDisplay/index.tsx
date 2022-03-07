import { IDisplayComponent } from 'react-flow-builder';

const EndNodeDisplay: React.FC<IDisplayComponent> = ({ node }) => {
  return <div className="end-node">{node.name}</div>;
};

export default EndNodeDisplay;
