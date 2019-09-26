import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {  getFirebase } from 'react-redux-firebase';
 
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/fbConfig";



const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase) // redux bindings for firestore
  )
);

const rrfProps = {
    firebase,
    config: {
      userProfile: "users",
      useFirestoreForProfile: true, 
      attachAuthIsReady: true
    },
    dispatch: store.dispatch,
    createFirestoreInstance
  };


ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
