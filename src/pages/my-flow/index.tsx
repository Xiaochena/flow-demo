import React from 'react';
import classnames from 'classnames';

import FlowLine from './FlowLine';
import AddNode from './AddNode';
import StartNode from './StartNode';
import EndNode from './EndNode';
import FlowNodeBox from './FlowNodeBox';
import FlowOrdinary from './FlowOrdinary';

import styles from './styles.less';
import FlowCondition from './FlowCondition';

const myFlow: React.FC = () => {
  return (
    <div className={styles.myFlow}>
      <div className={styles.content}>
        <FlowNodeBox>
          <StartNode />
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
        <FlowNodeBox>
          <FlowCondition />
          <FlowLine />
          <AddNode />
          <FlowLine />
        </FlowNodeBox>
        {/* ------------------------------------------------------------------------------------ */}
        <FlowNodeBox>
          <EndNode />
        </FlowNodeBox>
      </div>
    </div>
  );
};

export default myFlow;
