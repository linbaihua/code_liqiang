import React, {FC} from 'react';
import styles from './index.module.scss';

interface Props {
    classname?: React.CSSProperties | undefined
}

const Child: FC<Props> = ({classname}) => {
  return (
    <div>
        <div className={styles.box} style={classname}>这是一个盒子</div>
    </div>
  )
}

export default Child