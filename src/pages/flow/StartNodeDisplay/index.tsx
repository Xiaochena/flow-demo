import { IDisplayComponent } from 'react-flow-builder';

const StartNodeDisplay: React.FC<IDisplayComponent> = ({ node }) => {
  return <div className="start-node">{node.name}</div>;
};

export default StartNodeDisplay;
