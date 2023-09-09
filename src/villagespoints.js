import React from 'react';
import './App.css'
import map from './map.png'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map} alt="noMap"></img>
    <Village typeOfMarker='red' top={8} left={5} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='red' top={10} left={21} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='black' top={19} left={68} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='red' top={21} left={71} currentInfo={currentInfo} id={4}/>
    <Village typeOfMarker='red' top={18} left={30} currentInfo={currentInfo} id={5}/>
    <Village typeOfMarker='red' top={17} left={54} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='yellow' top={22} left={61} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='red' top={22} left={6} currentInfo={currentInfo} id={9}/>
    <Village typeOfMarker='red' top={22} left={15} currentInfo={currentInfo} id={10}/>
    <Village typeOfMarker='red' top={22} left={21} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='red' top={23} left={28} currentInfo={currentInfo} id={12}/>

    <Village typeOfMarker='red' top={21} left={48} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='yellow' top={28} left={53} currentInfo={currentInfo} id={14}/>
    <Village typeOfMarker='yellow' top={25} left={62} currentInfo={currentInfo} id={15}/>
    <Village typeOfMarker='black' top={27} left={74} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='red' top={29} left={9} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='red' top={31} left={40} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='red' top={32} left={47} currentInfo={currentInfo} id={19}/>
    <Village typeOfMarker='red' top={35} left={62} currentInfo={currentInfo} id={20}/>
    <Village typeOfMarker='red' top={34} left={15} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='red' top={39} left={77} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='red' top={37} left={10} currentInfo={currentInfo} id={23}/>

    <Village typeOfMarker='red' top={42} left={6} currentInfo={currentInfo} id={24}/>
    <Village typeOfMarker='red' top={37} left={17} currentInfo={currentInfo} id={25}/>
    <Village typeOfMarker='red' top={39} left={21} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='red' top={39} left={37} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='yellow' top={38} left={55} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='red' top={44} left={76} currentInfo={currentInfo} id={29}/>
    <Village typeOfMarker='red' top={46} left={14} currentInfo={currentInfo} id={30}/>
    <Village typeOfMarker='red' top={46} left={26} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='red' top={46} left={32} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='red' top={43} left={41} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='red' top={47} left={63} currentInfo={currentInfo} id={34}/>

    <Village typeOfMarker='red' top={50} left={15} currentInfo={currentInfo} id={35}/>
    <Village typeOfMarker='red' top={52} left={32} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='black' top={54} left={45} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='black' top={55} left={18} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='red' top={55} left={25} currentInfo={currentInfo} id={39}/>
    <Village typeOfMarker='red' top={56} left={32} currentInfo={currentInfo} id={40}/>

    <Village typeOfMarker='red' top={60} left={48} currentInfo={currentInfo} id={42}/>
    <Village typeOfMarker='black' top={63} left={69} currentInfo={currentInfo} id={43}/>
    <Village typeOfMarker='black' top={61} left={13} currentInfo={currentInfo} id={44}/>
    <Village typeOfMarker='red' top={62} left={19} currentInfo={currentInfo} id={45}/>

    <Village typeOfMarker='red' top={62} left={25} currentInfo={currentInfo} id={46}/>
    <Village typeOfMarker='red' top={64} left={32} currentInfo={currentInfo} id={47}/>
    <Village typeOfMarker='black' top={64} left={42} currentInfo={currentInfo} id={48}/>
    <Village typeOfMarker='red' top={63} left={53} currentInfo={currentInfo} id={49}/>

    <Village typeOfMarker='red' top={68} left={63} currentInfo={currentInfo} id={50}/>
    <Village typeOfMarker='red' top={65} left={11} currentInfo={currentInfo} id={51}/>
    <Village typeOfMarker='red' top={67} left={16} currentInfo={currentInfo} id={52}/>
    
    <Village typeOfMarker='red' top={80} left={19} currentInfo={currentInfo} id={53}/>
    <Village typeOfMarker='red' top={75} left={26} currentInfo={currentInfo} id={54}/>
    <Village typeOfMarker='red' top={78} left={52} currentInfo={currentInfo} id={55}/>
    <Village typeOfMarker='red' top={84} left={61} currentInfo={currentInfo} id={56}/>

    <Village typeOfMarker='red' top={59} left={7} currentInfo={currentInfo} id={57}/>
    <Village typeOfMarker='red' top={70} left={45} currentInfo={currentInfo} id={58}/>
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
