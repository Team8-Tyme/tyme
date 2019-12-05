import React from 'react';
import Moment from 'react-moment';
import history from '../../components/pages/history';
// import { Timestamp } from '@firebase/firestore-types';


export default class timestamp extends React.Component {
    render() {
      return (
        <Moment format="YYYY/MM/DD">
          1976-04-19T12:59-0500
        </Moment>
      );
    }
  }

 