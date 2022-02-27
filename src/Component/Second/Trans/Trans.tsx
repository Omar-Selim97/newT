import React, { useState } from 'react'
import Bus from './Bus.png'
import car from './car.png'
import metro from './metro.png'
import plane from './plane.png'
import ship from './ship.png'
import taxi from './taxi.png'
const Trans = () => {
  const [color,setColor]=useState('transperant');

  type Values = {
    id: number;
    title: string;
    image: string;
    color:string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'Bus',
      image: Bus,
      color:'cornflowerblue',
    },
    {
      id: 2,
      title: 'car',
      image:car,
      color:'cornflowerblue',
    },
    {
      id: 3,
      title: 'metro',
      image: metro,
      color:'cornflowerblue',
    },
    
    {
      id: 4,
      title: 'plane',
      image: plane,
      color:'cornflowerblue',
    },
    
    {
      id: 5,
      title: 'taxi',
      image: taxi,
      color:'cornflowerblue',
    },
    
    {
      id: 6,
      title: 'ship',
      image: ship,
      color:'cornflowerblue',
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img style={{background:color}}  key={item.id}  onClick={()=>{setColor(item.color)}} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="mx-auto my-5 card col-xs-8  col-sm-8 col-md-8 col-lg-6">
    <div className="card-body">
      <h4 className="card-title">
        Transport
      </h4>
      {listImage}
    </div>
</div>
  )
}

export default Trans