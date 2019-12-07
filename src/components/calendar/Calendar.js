import moment from 'moment'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';

/* Utils */
import { generateCurrentWeek, generateRecentDays, syncScroll } from '../../utils/habits.utils'
import DateCard from './DateCard';

function calculatePerfectDay(date, habits){
    /* Check if all habits are complete  */
    //const allHabitsValues = habits.habitList.map((habit)=>{
    const allHabitsValues = habits.map((habit)=>{
    var value = -1	

    //habit.checkmarks.map((checkmark)=>{
	habit.map((checkmark)=>{
	    if (checkmark.date == date) {
		value = checkmark.value
	    }
	})
	return value
    })
    /* Check if all habits completed */
    /* const perfectDay = allHabitsValues.every((value) => value >= 1)*/
    /* return the smallest checkbox value */
    return  Math.min(...allHabitsValues)    
}


// const useStyles = makeStyles({
//     calendar: {
//         marginRight: 10,
//         float: "right",
//         width: "calc(100% - 210px)",
//         maxWidth: "calc(50px * 8)",
//         overflowY: "hidden",
//         overflowX: "scroll",
//         direction: "rtl",
//         '&::-webkit-scrollbar': {
//             height: 100
//           },
//         maxHeight: 200,
//     }
// });

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));


const Calendar = () => {
    const classes = useStyles();
    var days = generateRecentDays() 
    const calendar = days.map((day, i)=>{
        const minValue = calculatePerfectDay(day.date, [["a","b","c"],[1,2,3],[1,2,3]])
        const dayMark = ["","basic","perfect"][minValue]
        return (
            <div className={"day " + dayMark} key={day.date}>
                <DateCard dateName={day.name} dateNumber={day.date.slice(-2)}/>
            </div>
        )
    })
    return (
        <div className={classes.root}>
        {/*Calender*/}
          <GridList className={classes.gridList} cols={2}>
          { calendar }
          </GridList>
        </div>

    )
}

/* Magic connecting component to redux */
function mapStateToProps(state) {
    return {
    	habits: state.habits
    }
}
/* First argument allows to access state */
/* Second allows to fire actions */
export default connect(mapStateToProps, null)(Calendar);