import React from 'react'
import List from '../components/List'
import Write from '../components/Write'
import ImgStore from '../store/ImgStore'
import useStore from '../store/Store'

const Home: React.FC = () => {
  const { close, closeEvent } = useStore();
  const { plusBtn, closeBtn } = ImgStore();

  return (
    <section className=' max-w-main min-w-main mx-auto min-h-lvh relative overflow-hidden'>
        <div>
          <h1 className='text-h2 text-4xl font-extrabold text-center py-5'>Todo List</h1>
          <List/>
        </div>
        <Write/>
        <button className={`absolute bottom-20 right-10`} onClick={()=>{closeEvent()}}>
          <img className='shadow-l rounded-full shadow-xl' src={`${close ? `${closeBtn}` : `${plusBtn}`}`}></img>
        </button>
    </section>
  )
}

export default Home