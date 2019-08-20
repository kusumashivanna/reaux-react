import UserAction from "./action/User.action.js"
const Userdata=(
    state={
        loading:false,
        error:null,
        data:null,
        status:null
    },action)=>{
        switch(action.status)
            {
                case UserAction.REQUEST:
                return Object.assign({},state,{
                    status:action.status,
                    loading:true
                });
                case UserAction.SUCCESS:
                return Object.assign({}, state, {
                  status: action.status,
                  loading: false,
                  userData: action.userdata
                });
                case UserAction.FAILURE:
                return Object.assign({}, state, {
                  status: action.status,
                  loading: false,
                  error: action.usererror
                });
                default:
                return state;
            }
    };
export default Userdata;