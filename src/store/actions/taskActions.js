export const createTask = (taskTitle)  => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore(); 
        firestore.collection('task').add({
            ...taskTitle,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', taskTitle});
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err})
        })
    }
}; 