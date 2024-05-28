import React from 'react'
import { changeSearchTerm } from '../store/slices/courseSlice'
import { useSelector,useDispatch } from 'react-redux'

export default function CourseShearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=> state.course.searchTerm)
  return (
    <div className='listHeader'>
      <h3 className='title is-3'>Kurslarım</h3>
      <div className='search field is horizontal'>
        <label className='label'>Ara</label>
        <input className='input'
        onChange={(event)=>{
          dispatch(changeSearchTerm(event.target.value))
        }}
        value={searchTerm}/>
      </div>
    </div>
  )
}
