import React from 'react';
import classnames from 'classnames';
import styles from './styles.less';

const myFlow: React.FC = () => {
  return (
    <div className={styles.myFlow}>
      <div className={styles.content}>
        <div className={styles.node}>
          <div className={styles.start}>开始</div>
          <div className={styles.line} />
          <div className={styles.add}>+</div>
          <div className={styles.line} />
        </div>
        <div className={styles.node}>
          <div className={styles.ordinary}>
            <div className={styles.title}>普通节点</div>
            <div className={styles.ordinaryContent}>发起人等于monkey</div>
          </div>
          <div className={styles.line} />
          <div className={styles.add}>+</div>
          <div className={styles.line} />
        </div>
        <div className={styles.node}>
          <div className={styles.ordinary}>
            <div className={styles.title}>普通节点</div>
            <div className={styles.ordinaryContent}>发起人等于monkey</div>
          </div>
          <div className={styles.line} />
          <div className={styles.add}>+</div>
          <div className={styles.line} />
        </div>
        {/* --------------------------------------------- */}
        <div className={styles.node}>
          <div className={styles.condition}>
            <div className={styles.conditionBtn}>添加条件</div>
            <div className={styles.conditionItems}>
              <div
                className={classnames(styles.lineTop, styles.lineHalfLeft)}
              />
              <div
                className={classnames(styles.lineBottom, styles.lineHalfLeft)}
              />
              <div className={styles.node}>
                <div className={styles.ordinary}>
                  <div className={styles.title}>普通节点</div>
                  <div className={styles.ordinaryContent}>发起人等于monkey</div>
                </div>
                <div className={styles.line} />
                <div className={styles.add}>+</div>
                <div className={styles.line} />
              </div>
              <div className={styles.node}>
                <div className={styles.ordinary}>
                  <div className={styles.title}>普通节点</div>
                  <div className={styles.ordinaryContent}>发起人等于monkey</div>
                </div>
                <div className={styles.line} />
                <div className={styles.add}>+</div>
                <div className={styles.line} />
              </div>
              <div className={styles.node}>
                <div className={styles.ordinary}>
                  <div className={styles.title}>普通节点</div>
                  <div className={styles.ordinaryContent}>发起人等于monkey</div>
                </div>
                <div className={styles.line} />
                <div className={styles.add}>+</div>
                <div className={styles.line} />
              </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className={styles.conditionItems}>
              <div className={classnames(styles.lineTop)} />
              <div className={classnames(styles.lineBottom)} />
              <div className={styles.node}>
                <div className={styles.ordinary}>
                  <div className={styles.title}>普通节点</div>
                  <div className={styles.ordinaryContent}>发起人等于monkey</div>
                </div>
                <div className={styles.line} />
                <div className={styles.add}>+</div>
                <div className={styles.line} />
              </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className={styles.conditionItems}>
              <div
                className={classnames(styles.lineTop, styles.lineHalfRight)}
              />
              <div
                className={classnames(styles.lineBottom, styles.lineHalfRight)}
              />
              <div className={styles.node}>
                <div className={styles.ordinary}>
                  <div className={styles.title}>普通节点</div>
                  <div className={styles.ordinaryContent}>发起人等于monkey</div>
                </div>
                <div className={styles.line} />
                <div className={styles.add}>+</div>
                <div className={styles.line} />
              </div>
            </div>
          </div>

          <div className={styles.line} />
          <div className={styles.add}>+</div>
          <div className={styles.line} />
        </div>
        {/* ------------------------- */}
        <div className={styles.node}>
          <div className={styles.end}>结束</div>
        </div>
      </div>
    </div>
  );
};

export default myFlow;
