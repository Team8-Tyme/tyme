import React from 'react';
import moment from 'moment';

const Notification = ({notifications}) => {
    return (
        <ul>
            {notifications && notifications.map((item, index) => {
                return (
                    <li key={index}>
                        <strong>{item.title}</strong>
                        <span>{moment(item.created.toDate()).fromNow()}</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default Notification;