const counterRender = document.getElementById('counter-render');
const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');

//actions
const incrementAction = {
    type: "INCREMENT"
}

const decrementAction = {
    type: "DECREMENT"
}

const incrementByTen

incrementButton.addEventListener('click', () =>
    store.dispatch(incrementAction));

decrementButton.addEventListener('click', () =>
    store.dispatch(decrementAction));

//reducer
let initialState = 0;
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

//store
const { createStore } = Redux;
const store = createStore(counterReducer);
const render = () => {
    counterRender.innerText = store.getState();
};
render();

store.subscribe(render);
store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(incrementAction);

store.dispatch(decrementAction);

store.dispatch(incrementAction);

//console.log(store)
// console.log(counterReducer(0, incrementAction));

// console.log(counterReducer(0, { type: 'INCREMENT' }));

// console.log(counterReducer(4, { type: 'DECREMENT' }));

// console.log(counterReducer(8, { type: 'INCREMENT' }));