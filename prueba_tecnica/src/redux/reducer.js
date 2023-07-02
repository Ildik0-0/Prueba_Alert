import { createSlice} from '@reduxjs/toolkit'
const initialState = {
    allPlatforms: [],
    platforms:{},
    records:{},
    results:{}
}

export const getReducer = createSlice({
    name: 'apiInfo',
    initialState,

    reducers:{
        allPlatfoms:(state, {payload}) => {
            const data = payload;
            
            state.allPlatforms = data
        },

        getApiRecords:(state, {payload}) =>{
            const data = payload;
            state.records = data;
        },

        getApiPlatfomsId:(state, {payload}) =>{
            const data = payload
            state.platforms =data;
        },
        

        postApiResult:(state, action) =>{
            const data = action.payload;
            state.results = data;
        }

    }
})

export const {allPlatfoms,getApiRecords,getApiPlatfomsId,postApiResult} = getReducer.actions;

export default getReducer.reducer;