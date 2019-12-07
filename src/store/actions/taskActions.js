export const createTask = (taskTitle, taskDetail)  => {
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        
        const firestore = getFirestore();
        const firebase = getFirebase();
        firestore
          .collection("task")
          .add({
            createdAt: firestore.Timestamp.now(),
            taskTitle: taskTitle,
            taskDetail: taskDetail,
    
          })
          .then(() => {
            dispatch({ type: "CREATE_TASK", taskTitle, taskDetail });
          })
          .catch(err => {
            dispatch({ type: "CREATE_TASK_ERROR", err });
          });

        // add created task to user notification
        firestore
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
          notifications: firebase.firestore.FieldValue.arrayUnion({
            title: "Created Task: \""+taskTitle+"\"!",
            created: firestore.Timestamp.now()
          })
        });
    }
}; 