import React from 'react'
import { data } from '../types/dataType'
import ImgStore from '../store/ImgStore';
import useStore from '../store/Store';

const Item: React.FC<{data: data}> = ({data}) => {
  const { arrLeft, arrRight, checkOff, checkOn, trash } = ImgStore();
  const { checkToggle, removeData, dataGet} = useStore();

  

  const remove = (): void =>{
    removeData(data.key);
    dataGet();
  }

  return (
    <li className='flex justify-between my-5'>
      <div>
        <img className=' cursor-pointer' onClick={()=>{checkToggle(data.key)}} src={`${data.type ? `${checkOn}` : `${checkOff}`}`}></img>
      </div>
      <p className='flex-1 text-center'>
      {data.text}
      </p>
      <div>
        <img className=' cursor-pointer' onClick={()=>{remove()}} src={trash}></img>
      </div>
    </li>
  )
}

export default Item