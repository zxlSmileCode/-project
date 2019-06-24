import { createStore } from 'redux';


let store = createStore((state = {currentTab:'home'}, action) => {
    switch (action.type) {
        case "UPDATE_TAB":
            return { ...state, currentTab: action.payload }
        default:
            return state
    }
});

export { store};