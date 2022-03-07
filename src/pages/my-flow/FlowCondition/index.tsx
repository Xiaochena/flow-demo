import classnames from 'classnames';
import React from 'react';

import AddNode from '../AddNode';
import FlowLine from '../FlowLine';
import FlowNodeBox from '../FlowNodeBox';
import FlowOrdinary from '../FlowOrdinary';

import styles from './styles.less';

const FlowCondition = () => {
  return (
    <div className={styles.flowCondition}>
      <div className={styles.conditionBtn}>添加条件</div>
      <div className={styles.conditionItems}>
        <div className={classnames(styles.lineTop, styles.lineHalfLeft)} />
        <div className={classnames(styles.lineBottom, styles.lineHalfLeft)} />
        <FlowNodeBox>
          <FlowOrdinary />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
        <FlowNodeBox>
          <FlowOrdinary />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
        <FlowNodeBox>
          <FlowOrdinary />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
      </div>
      <div className={styles.conditionItems}>
        <div className={classnames(styles.lineTop)} />
        <div className={classnames(styles.lineBottom)} />
        <FlowNodeBox>
          <FlowOrdinary />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
      </div>
      <div className={styles.conditionItems}>
        <div className={classnames(styles.lineTop, styles.lineHalfRight)} />
        <div className={classnames(styles.lineBottom, styles.lineHalfRight)} />
        <FlowNodeBox>
          <FlowOrdinary />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
      </div>
    </div>
  );
};

export default FlowCondition;
