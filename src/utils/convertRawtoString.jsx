import React from 'react'

const convertRawtoString = (labelValue,isSub=false) => {
  
  const num = Math.abs(Number(labelValue));

  if(num >= 1.0e9){
    return (num/1.0e9).toFixed(0) + "B views";
  }
  if(num >= 1.0e6){
    return (num/1.0e6).toFixed(0) + "M views";
  }
  if(num >= 1.0e3){
    return (num/1.0e3).toFixed(isSub ? 2 : 0) + "K views";
  }

  return num.toString() + " views";
}

export default convertRawtoString;




