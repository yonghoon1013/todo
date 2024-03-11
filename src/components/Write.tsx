import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import useStore from '../store/Store'
import { Value, data } from '../types/dataType';





const Write: React.FC = () => {
  const { close, closeEvent, addData, stData, today, dateGet, dataGet, data, date, onChange } = useStore();

  const [inputValue,setInputValue] = useState<string>('')

  const add = async(e:any): Promise<void> =>{
    e.preventDefault();
    const fomrData = new FormData(e.target);
    fomrData.append("key", Date.now().toString());
    fomrData.append("date", moment(Array.isArray(date) ? date[0] : date).format("YYYY-MM-DD"));
    const type: boolean = false;
    const objData: any  = {type, ...Object.fromEntries(fomrData)}
    await addData(objData);
    await dateGet();
    await dataGet();
    setInputValue('');
    closeEvent();
    
  }



  useEffect(()=>{
    const local: string | null = localStorage.getItem("item");
    if(local){
      const localData: data[] = JSON.parse(local)
      if(localData.length > 0 && localData){
        localData.forEach((item)=>{addData(item)})
      }
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("item", JSON.stringify(stData))
    dataGet();
  },[stData])

  return (
    <div className={`w-full bg-slate-200 p-5 absolute duration-1000 ease-in-out ${close ? "top-1/4" : "top-full"}`}>
      <Calendar className='!w-full' onChange={onChange} value={date} />
      <form className='flex justify-between h-10 mt-5' onSubmit={(e)=>{add(e)}}>
        <input className=' w-4/5' type='text' name='text' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
        <button className=' w-1/6 bg-orange-200'>입력</button>
      </form>
    </div>
  )
}

export default Write