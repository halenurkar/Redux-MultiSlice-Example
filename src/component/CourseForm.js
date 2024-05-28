import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changeName, changeDescription, changeCost } from '../store/slices/formSlice';
import { addCourse } from '../store/slices/courseSlice';
export default function CourseForm() {
  const {name,description,cost} = useSelector((state)=> state.form)
  const dispatch = useDispatch();
  console.log(name + '-'+ description + '-'+ cost)
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addCourse({name, description, cost}))
    console.log('dispatch '+name + '-'+ description + '-'+ cost)

  }

  return (
    <div className='courseForm panel'>
      <h4 className='subTitle is-3'>Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Ad</label>
            <input className='input is-expanded'
            onChange={(event)=>{dispatch(changeName(event.target.value))}}
            value={name}/>
          </div>

          <div className='field'>
            <label className='label'>Açıklama</label>
            <textarea className='input is-expanded' 
            onChange={(event)=>{dispatch(changeDescription(event.target.value))}} 
            value={description}/>
          </div>

          <div className='field'>
            <label className='label'>Fiyat</label>
            <input type='number' 
            className='input is-expanded' 
            onChange={(event)=>{dispatch(changeCost(event.target.value))}}
            value={cost}/>
          </div>   
        </div>
        <div className='field'>
          <button className='button is-primary'>Kaydet</button>
          </div>
      </form>
    </div>
  )
}
