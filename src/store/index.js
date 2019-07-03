import { createStore } from "redux";

const initState = {
    currentTab: "home",
    yiyantab: "yishuo",
    typetab: 0
};

let store = createStore((state = initState, action) => {
    switch (action.type) {
        case "UPDATE_TAB":
            return { ...state, currentTab: action.payload };
        case "YIYAN_TAB": {
            return { ...state, yiyantab: action.payload };
        }
        case "TYPE_TAB": {
            return { ...state, typetab: action.payload };
        }
        default:
            return state;
    }
});

export { store };
