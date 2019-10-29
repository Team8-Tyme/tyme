import React from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const notifyBox = {
    'listStyle': 'none',
    'margin': '0',
    'padding': '0'
}

const notifyEach = {
    'padding': '5px'
}

const Notification = ({notifications}) => {
    return (
        <ul style={notifyBox}>
            {(notifications && notifications.length > 0) ? (
                notifications.map((item, index) => (
                    <li key={index}>
                        <Paper style={notifyEach}>
                            <Typography>
                                <strong>{item.title}</strong>
                                <span style={{display:"block"}}>{moment(item.created.toDate()).fromNow()}</span>
                            </Typography>
                        </Paper>
                    </li>
                ))
            ) : (
                <li>
                    <Paper style={notifyEach}>
                        <Typography>You havent done anything yet!</Typography>
                    </Paper>
                </li>
            )}
        </ul>
    )
}
export default Notification;