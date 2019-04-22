import {
    SELECT_CURRENT_CATEGORY
} from '../actions/SelectCurrentCategoryAction';

export default function SelectCurrentCategoryReducer(state=[] , {
    type,
    payload
}) {
    switch (type) {       
        case SELECT_CURRENT_CATEGORY:
            return {
                ...state,
                fetching: true,
                selectedCategory : payload
            };
        
        default:
            return state;
    }
}