import React, { useEffect, useState } from 'react'
import styles from './carousel.module.scss'
import Card from './card'
import { BiChevronsLeft } from 'react-icons/bi'
import { BiChevronsRight } from 'react-icons/bi'

const Carousel = ({data}) => {

  const dataLength = data.length;

  const[centerIndex, setCenterIndex] = useState(1);
  const[leftIndex, setLeftIndex] = useState(dataLength);
  const[leftOutIndex, setLeftOutIndex] = useState(dataLength-1);
  const[rightIndex, setRightIndex] = useState(2);
  const[rightOutIndex, setRightOutIndex] = useState(3);
  
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

  let timer;

  useEffect(() => {
    
    clearTimeout(timer);
    timer = setTimeout(() => {
      setRightOutIndex(prev=>mod(prev+1,dataLength));
      setRightIndex(prev=>mod(prev+1,dataLength));
      setCenterIndex(prev=>mod(prev+1,dataLength));
      setLeftIndex(prev=>mod(prev+1,dataLength));
      setLeftOutIndex(prev=>mod(prev+1,dataLength));
    }, 5000);
  
    return () => {
      
    }
  }, [centerIndex])


  const onleftKey = () =>{
    clearTimeout(timer);
    setRightOutIndex(prev=>mod(prev-1,dataLength));
    setRightIndex(prev=>mod(prev-1,dataLength));
    setCenterIndex(prev=>mod(prev-1,dataLength));
    setLeftIndex(prev=>mod(prev-1,dataLength));
    setLeftOutIndex(prev=>mod(prev-1,dataLength));     
  }

  const onRightKey = () =>{
    clearTimeout(timer);
    setRightOutIndex(prev=>mod(prev+1,dataLength));
    setRightIndex(prev=>mod(prev+1,dataLength));
    setCenterIndex(prev=>mod(prev+1,dataLength));
    setLeftIndex(prev=>mod(prev+1,dataLength));
    setLeftOutIndex(prev=>mod(prev+1,dataLength));
  }
  

  return (
    <div className={styles.carousel} >
      <BiChevronsLeft  className={styles.leftKey} onClick={()=>onleftKey()} />
      <BiChevronsRight className={styles.rightKey} onClick={onRightKey}/>
      {data.map((card,i) =>{
        let className = null;
        if (card.id === centerIndex) {
          className = styles.card_center;
        } 
        else if (card.id === leftIndex) {
          className = styles.card_left;
        } 
        else if (card.id === leftOutIndex) {
          className = styles.card_left_out;
        } 
        else if (card.id === rightIndex) {
          className = styles.card_right;
        } 
        else if (card.id === rightOutIndex) {
          className = styles.card_right_out;
        } 

        return <Card key={i} data={card.image} className={className} />
  
      })}

    </div>
  )
}

export default Carousel