let state;

// changeState reducer
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

// dispatch function 
function dispatch(action) {
  state = changeState(state, action);
  render();
}

// render function
function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

// will display in our page display 0 
// The code changeState(undefined, { type: '@@INIT' }) returns { count: 0 },
dispatch(undefined, { type: "@@INIT" });
// dispatch({ type: "counter/increment" });
