export const saveHabit = data => dispatch =>
  dispatch({
    type: "SAVE_HABIT_ACTION",
    payload: data
  });
export const updateHabit = data => dispatch =>
  dispatch({
    type: "UPDATE_HABIT_ACTION",
    payload: data
  });

// export const addHabit = (habit) => {
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         const firestore = getFirestore();
//         firestore.collection('habits').add({
//             habit: habit
//         }).then(() => {
//             dispatch({type: 'CREATE_HABIT', habit})
//         }).catch((err) => {
//             dispatch({type: 'CREATE_HABIT_ERROR'}, err)
//         })
//     }
// };
