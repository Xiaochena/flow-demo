import React from 'react';
import styles from './styles.less';

const FlowOrdinary = () => {
  return (
    <div className={styles.flowOrdinary}>
      <div className={styles.title}>普通节点</div>
      <div className={styles.ordinaryContent}>发起人等于monkey</div>
    </div>
  );
};

export default FlowOrdinary;
