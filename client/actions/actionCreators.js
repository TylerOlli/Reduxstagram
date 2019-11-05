// Increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// Add Comment
export function addComment(postId, author, comment) {
  console.log("Dispatching Add Comment");
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}

// Remove Comment
export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  };
}
