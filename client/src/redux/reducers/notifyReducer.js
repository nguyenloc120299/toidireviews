import { NOTIFY_TYPES } from "../actions/notifyAction";
import { EditData } from "../actions/imageAction";


const initialState = {
    loading: false,
    data: [],
    sound: false
}

const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFY_TYPES.GET_NOTIFIES:
            return {
                ...state,
                data: action.payload
            };
        case NOTIFY_TYPES.CREATE_NOTIFY:
            return {
                ...state,
                data: [action.payload, ...state.data]
            };
        case NOTIFY_TYPES.REMOVE_NOTIFY:
            return {
                ...state,
                data: state.data.filter(item => (
                    item.id !== action.payload.id || item.url !== action.payload.url
                ))
            };
        case NOTIFY_TYPES.UPDATE_NOTIFY:
            return {
                ...state,
                data: EditData(state.data, action.payload._id, action.payload)
            };
        default:
            return state;
    }
}
export default notifyReducer