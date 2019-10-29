export const createTask = (task)  => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        const firestore = getFirestore(); 
        firestore.collection('task').add({
            ...task, 
            taskName: 'Do homework',
            taskStartDate: '10/29/19',
            taskDueDate: '11/01/19',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', taskDueDate});
        }).catch((err) => {
            dispatch({type: 'CREATE_TASK_ERROR', err})
        })
    }

    
    
}; 