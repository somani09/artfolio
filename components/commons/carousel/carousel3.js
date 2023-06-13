import React, { useEffect, useState } from 'react'
import styles from './carousel3.module.scss'
import Card from './card3'
import { BiChevronsLeft } from 'react-icons/bi'
import { BiChevronsRight } from 'react-icons/bi'

const Carousel = ({data}) => {

  const dataLength = data.length;

  const[centerIndex, setCenterIndex] = useState(dataLength/2);

  
  // let centerIndex = 1 ;
  // let leftIndex = dataLength;
  // let leftOutIndex = dataLength-1;
  // let rightIndex = 2;
  // let rightOutIndex = 3;
  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result > 0 ? result : result + m;
  };

  const modWithNegitive = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result > 0 ? result : (-1)*(result + m);
  };


  let timer;

  // useEffect(() => {
    
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {

  //   }, 3000);
  
  //   return () => {
      
  //   }
  // }, [centerIndex])


  const onleftKey = () =>{
    clearTimeout(timer);

    centerIndex<dataLength && setCenterIndex(prev=>prev+1);
  
  }

  const onRightKey = () =>{
    clearTimeout(timer);
    centerIndex>0  && setCenterIndex(prev=>prev-1);

  }
  

  return (
    <div className={styles.carousel} >
      <BiChevronsLeft  className={`${styles.leftKey} ${styles.key}`} onClick={()=>onleftKey()} />
      <BiChevronsRight className={`${styles.rightKey} ${styles.key}`} onClick={onRightKey}/>
      {data.map((card,i) =>{
        let className = null;
        let style={
          opacity : Math.abs(centerIndex - i)==0?'100%':`${(100 - Math.abs(mod(centerIndex - i,dataLength))*(15))/100}`,
          transform: `translateX(${Math.abs(centerIndex - i) === 0 ? '0' : (modWithNegitive(centerIndex - i,dataLength)) * (-125)}%) scale(${Math.abs(mod(centerIndex - i,dataLength)) === 0 ? '1' : (100 - Math.abs(centerIndex - i) * 15) / 100>0?(100 - Math.abs(centerIndex - i) * 15) / 100:0})`,
        }
        return <Card key={i} data={card} className={className} style={style} />
  
      })}

    </div>
  )
}

export default Carousel