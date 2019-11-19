export const createTask = (taskTitle, taskDetail)  => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore(); 
        firestore.collection('task').add({
            taskTitle,
            taskDetail,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', taskTitle});
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err})
        })
    }
}; 