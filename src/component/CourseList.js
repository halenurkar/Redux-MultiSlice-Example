import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteCourse } from '../store/slices/courseSlice';

export default function CourseList() {
  const {courses} = useSelector(({form, course: {data, searchTerm}} )=>{
    const filteredCourses = data.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {courses:filteredCourses} 
  })
  const dispatch = useDispatch();
  const renderedCourses=courses.map((course)=>{
      return(
        <div key={course.id} className='panel'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button onClick={()=>dispatch(deleteCourse(course.id))} className='button is-danger'>Sil</button>
        </div>
      )

    })
    

  return (
    <div className='courseList'>
      {renderedCourses}
    </div>
  )
}
