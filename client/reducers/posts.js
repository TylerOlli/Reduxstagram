// Reducer Takes In

// 1. The Action (Info About What Happened)
// 2. Copy of Current State

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      // Return Updated State
      console.log("Incrementing Likes");
      const i = action.index;
      return [
        ...state.slice(0, i), // Before The One We Are Updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // After The One We Are Updating
      ];
    default:
      return state;
  }
}

export default posts;
