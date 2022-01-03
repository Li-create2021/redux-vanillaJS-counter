//Actions

const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const incrementByTen = {
  type: "INCREMENT_BY_TEN",
};

const decrementByTen = {
  type: "DECREMENT_BY_TEN",
};

const resetAction = {
  type: "ZERO",
};

//create an initial state before the declaration
let initialState = 0;
//REDUCER providing the initial state to the reducer function.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_BY_TEN":
      return state + 10;
    case "DECREMENT_BY_TEN":
      return state - 10;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");
const incrementByTenButton = document.getElementById("increment-by-ten");
const decrementByTenButton = document.getElementById("decrement-by-ten");
const reset = document.getElementById("reset");

//MAIN
const render = () => {
  counterRender.innerText = store.getState();
};

render();
store.subscribe(render);

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);

incrementByTenButton.addEventListener("click", () =>
  store.dispatch(incrementByTen)
);

decrementByTenButton.addEventListener("click", () =>
  store.dispatch(decrementByTen)
);

reset.addEventListener("click", () => store.dispatch(resetAction));
