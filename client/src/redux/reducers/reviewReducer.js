import { EditData } from "../actions/imageAction";
import { REVIEW_ACTIONS } from "../actions/reviewAction";


const initialState = {
    list_review_place: [],
    result: 0,
    explore: [],
    total: 0
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {

        case REVIEW_ACTIONS.LIST_REVIEW_PLACE:
            return {
                ...state,
                list_review_place: action.payload
            };
        case REVIEW_ACTIONS.UPDATE_REVIEW_PLACE:
            return {
                ...state,
                list_review_place: EditData(state.list_review_place, action.payload._id, action.payload)
            }
        case REVIEW_ACTIONS.UPDATE_REVIEW_PLACE_EXPLORER:
            console.log(action.payload);
            return {
                ...state,
                explore: EditData(state.explore, action.payload._id, action.payload)
            }

        case REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW:
            const review = state.list_review_place.find(item => item._id === action.payload.reviewId)
            const newReview = { ...review, comments: [...review.comments, action.payload] }
            return {
                ...state,
                list_review_place: EditData(state.list_review_place, action.payload.reviewId, newReview)
            }
        case REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW_EXPLORE:
            const reviewExplore = state.explore.find(item => item._id === action.payload.reviewId)
            const newreviewExplore = { ...reviewExplore, comments: [...reviewExplore.comments, action.payload] }
            return {
                ...state,
                explore: EditData(state.explore, action.payload.reviewId, newreviewExplore)
            }
        case REVIEW_ACTIONS.LISTS_ALL_REVIEWS:
            return {
                ...state,
                explore: [...state.explore, ...action.payload.places],
                total: action.payload.total
            }
        case REVIEW_ACTIONS.LISTS_ALL_REVIEWS_FIRST:
            return {
                ...state,
                explore: [...action.payload.places],
                total: action.payload.total
            }
        default:
            return state;
    }
}


export default categoryReducer
