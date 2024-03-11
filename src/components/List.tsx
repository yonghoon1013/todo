import React, { useEffect } from 'react'
import ImgStore from '../store/ImgStore'
import Item from './Item';
import useStore from '../store/Store';
import { data } from '../types/dataType';


const List: React.FC = () => {

  const { arrLeft, arrRight } = ImgStore();
  const { close, closeEvent, addData, stData, dateGet, today, plus, minus, date, dataGet, data  } = useStore();

  
  const minusDate = (): void =>{
    minus();
    dateGet();  
    dataGet();
  }

  const plusDate = (): void =>{
    plus();
    dateGet();  
    dataGet();
  }


  useEffect(()=>{
    dataGet();
    dateGet();  
  },[])


    
  
  return (
    <div>
      <div className='flex justify-between justify-items-center'>
        <img className=' cursor-pointer' src={arrLeft} onClick={()=>{minusDate()}}></img>
        <span className='text-xl flex-1 text-center text-main'>{today}</span>
        <img className=' cursor-pointer' src={arrRight} onClick={()=>{plusDate()}}></img>
      </div>
      <div>
      <ul>
          {
            data ? data.map((item: data,index: number)=>(
              <Item key={index} data={item}/>
            )) : ""
          }
        </ul>
      </div>
    </div>
  )
}

export default List