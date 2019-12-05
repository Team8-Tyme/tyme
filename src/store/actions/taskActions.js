export const createTask = (taskTitle, taskDetail)  => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        
        const firestore = getFirestore(); 
        firestore
          .collection("task")
          .add({
            taskTitle: taskTitle,
            taskDetail: taskDetail,
            notifications: [
              {
                title: "Account Created!",
                created: firestore.Timestamp.now()
              }
            ]
          })
          .then(() => {
            dispatch({ type: "CREATE_TASK", taskTitle, taskDetail });
          })
          .catch(err => {
            dispatch({ type: "CREATE_TASK_ERROR", err });
          });
    }
}; 