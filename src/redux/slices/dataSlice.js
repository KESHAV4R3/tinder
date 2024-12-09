import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [
        {
            name: "deepender goyal",
            url: "https://images.forbesindia.com/media/images/2016/Jul/topimg_31887_deepinder_goyal.jpg",
        },
        {
            name: "elon musk",
            url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh",
        },
        {
            name: "jeff bezoz",
            url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQb8W_Dh8ZhWhd5-RhHjDnhqVGkEpB7GzOpoI4LZWDcY4-tJW8_",
        },
        {
            name: "bill gates",
            url: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
        },
        {
            name: "virat kohli",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH4d2KHlqekZyAG-nFmwMrbh_HoRECv0ExQ&s",
        },
        {
            name: "rohit sharma",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MVt2B5udFNhfw8ZeC_cJiOwAPdO7fCZlZA&s",
        },
        {
            name: "ms dhoni",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eUcU3lhXL5m2nlRfNfkN8xv5BC9Hx5V6Fg&s",
        },
        {
            name: "gautam gambhir",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDU5YPAudC3M3i8LZEaLo0jVEuwZy2-I5CQ&s",
        },
    ]
}

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.userData.push(action.payload);
        }
    }
})


export const { addData } = dataSlice.actions

export default dataSlice.reducer