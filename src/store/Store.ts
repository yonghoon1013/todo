import moment from 'moment';
import create from 'zustand';
import { Value, data } from '../types/dataType';

interface mainStore {
    close: boolean;
    closeEvent: () => void;
    stData: data[];
    addData: (props: data) => void;
    removeData: (key: string) => void;
    checkToggle: (key: string) => void;
    date: Date | Value;
    today : string;
    dateGet : () => void;
    plus : () => void;
    minus : () => void;
    data: data[];
    dataGet: () => void;
    onChange: (newValue : Value) => void;
}   


const useStore = create<mainStore>((set) => ({
    close : false,
    closeEvent() {
        set((state)=>( {close: !state.close} ))
    },
    stData : [],
    addData(props: data){
        set((state)=>({ stData : [...state.stData, props]}))
    },
    removeData(key){
        set((state)=>({
            stData: state.stData.filter((item)=> item.key !== key)
        }))
    },
    checkToggle(key){
        set((state)=>({
            stData: state.stData.map((item)=> item.key === key ? {...item, type: !item.type } : item)
        }))
    },
    date: new Date(),
    onChange: (newValue) => set({ date: newValue }),
    today : '',
    dateGet() {
        set((state) => {
            const date = state.date as Date; // state.date를 Date 타입으로 캐스팅
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const time = `${year}-${month}-${day}`;
            return { ...state, today: time };
        });
    },
    plus() {
        set((state)=>{
            const date = state.date as Date;
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + 1);
            return {...state, date : newDate}
        })
    },
    minus() {
        set((state)=>{
            const date = state.date as Date;
            const newDate = new Date(date);
            newDate.setDate(date.getDate() - 1);
            return {...state, date : newDate}
        })
    },
    data : [],
    dataGet() {
        set((state)=>({
            data : state.stData.filter((item)=>(item.date === state.today))
        }))
    }
}));


export default useStore;