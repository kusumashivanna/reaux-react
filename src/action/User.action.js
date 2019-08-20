import { dispatch } from "rxjs/internal/observable/pairs";

export const SUCCESS="SUCCESS"
export const FAILURE="FAILURE"
export const REQUEST="REQUEST"
export const GET_USER_REQUEST="GET_USER_REQUEST"
export const GET_USER_SUCCESS="GET_USER_SUCCESS"
export const GET_USER_FAILURE="GET_USER_FAILURE"
export function GetUserRequest()
{
    return {
    type:GET_USER_REQUEST,
    status:REQUEST
}
}
export function GetUserSuccess(data)
{
    return{
        type:GET_USER_SUCCESS,
        status:SUCCESS,
        data:data
    }
}
export function GetUserFailure(error)
{
    return {
        type:GET_USER_FAILURE,
        status:FAILURE,
        error:error
    }
}
export function GetUser(){
    return async dipatch=>{
        dispatch(GetUserRequest());
        try{
            const result= await fetch("https://api.github.com/users")
            const resultjson=await result.json();
            if(resultjson.error)
            {
                throw new Error(resultjson.error);
            }
            return dispatch(GetUserSuccess(resultjson))
        }
        catch(e)
        {
            return(dispatch(GetUserFailure(e.message)))
        }
    };
}