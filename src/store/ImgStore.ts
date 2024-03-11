import create from 'zustand';
import arrLeft from '../asset/arr-left.svg'
import arrRight from '../asset/arr-right.svg'
import plusBtn from '../asset/plus.svg'
import closeBtn from '../asset/close.svg'
import checkOff from '../asset/check-off.svg'
import checkOn from '../asset/check-on.svg'
import trash from '../asset/trash.svg'

interface ImgStoreProps {
    arrLeft : string;
    arrRight : string;
    plusBtn : string;
    closeBtn : string;
    checkOff : string;
    checkOn : string;
    trash : string;
  }

const ImgStore = create<ImgStoreProps>((set) => ({
    arrLeft : arrLeft,
    arrRight : arrRight,
    plusBtn : plusBtn,
    closeBtn : closeBtn,
    checkOff : checkOff,
    checkOn : checkOn,
    trash : trash
}));


export default ImgStore;