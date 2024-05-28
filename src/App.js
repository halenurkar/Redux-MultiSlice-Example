import './App.css';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';
import CourseShearch from './component/CourseShearch';
import CourseValue from './component/CourseValue';

function App() {
  return (
    <div className='container is-fluid' >
    <CourseForm/>
    <CourseShearch/>
    <CourseList/>
    <CourseValue/>
    </div>
  );
}

export default App;
