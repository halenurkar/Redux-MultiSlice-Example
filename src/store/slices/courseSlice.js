import {createSlice, nanoid} from '@reduxjs/toolkit'

const courseSlice = createSlice({
    name:'form',
    initialState:{
        searchTerm:'',
        data:[]
    },
    reducers:{
        addCourse(state, action){
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        deleteCourse(state,action){
          state.data = state.data.filter((item)=> item.id !== action.payload)
        },
        changeSearchTerm(state, action){
            state.searchTerm =action.payload;

        }
        
        
    }
})

export const {addCourse, deleteCourse, changeSearchTerm} =courseSlice.actions;
export const courseReducer = courseSlice.reducer;