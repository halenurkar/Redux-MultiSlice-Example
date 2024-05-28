import React from 'react'
import { useSelector } from 'react-redux'
export default function CourseValue() {
  const {coursesCost} = useSelector(({from, course:{searchTerm, data}})=>{
    const filterData = data.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {coursesCost : filterData};
  })

  let totalCost =0;
  coursesCost.forEach(item => {
    totalCost += Number(item.cost);
  });
  return (
    <div className='coursePrice'>Toplam Tutar: {totalCost} TL</div>
  )
}
