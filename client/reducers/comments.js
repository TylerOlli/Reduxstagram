function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // Return New State W/ New Comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      console.log("Removed A Comment");
      // Need To Return New State W/O Deleted Comment
      return [
        // From Start To One That Gets Deleted
        ...state.slice(0, action.i),
        // After Deleted One, To End
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // Take Current State
      ...state,
      // Overwrite This Post With New One
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
