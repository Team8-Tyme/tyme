import React from 'react';
import moment from 'moment';

const Notification = ({notifications}) => {
    return (
        <ul>
            {notifications && notifications.map((item, index) => {
                return (
                    <li key={index}>
                        <div><strong>{item.title}</strong></div>
                        <div><span>{moment(item.created.toDate()).fromNow()}</span></div>
                    </li>
                )
            })}
        </ul>
    )
}
export default Notification;