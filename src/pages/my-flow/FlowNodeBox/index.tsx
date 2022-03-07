import React from 'react';
import styles from './styles.less';

const FlowNodeBox: React.FC = ({ children }) => {
  return <div className={styles.flowNodeBox}>{children}</div>;
};
export default FlowNodeBox;
