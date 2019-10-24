import React from 'react';
import moment from 'moment';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

export const Notification = ({notifications}) => {
    console.log("asdfasdfasdfa");
    return (
        <ul>
            {notifications && notifications.map(item => {
                return (
                    <li key={item.id}>
                        <strong>{item.title}</strong>
                        <span>{item.date}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default compose(
    connect(state => {
        return {
            "user-data": state.firestore.ordered['user-data']
        }
    }),
    firestoreConnect([
        {collection: 'user-data'}
    ])
)(Notification);