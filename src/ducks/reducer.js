
initialState = {
    username='',
    id=0,
    profilePicture=''

}

const GET_USER ='GET_USER';
const LOGOUT = 'LOGOUT'; 


export default function reducer(state = initialState, action){
    const {type, payload} = action; 

    switch(type){
        case GET_USER:
            return {...state, user: payload}

    }

}