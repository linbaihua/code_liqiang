import React, {FC} from 'react';
import Child from '../Child/index'

interface Props {

}

const Parent:FC<Props> = () => {
  return (
    <div>
        Parent
        <hr />
        <Child />
    </div>
  )
}

export default Parent