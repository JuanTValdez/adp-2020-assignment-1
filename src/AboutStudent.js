import React from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './AboutStudentStyles'

const AboutStudent = () => {

    const classes = useStyles()
    const { studentName } = useParams()
    

    return(
    <div className={classes.root}>
        <h1>
        About
        {' '}
        <span className={classes.studentName}>
            
            {studentName}
        
        </span>
        </h1>
    </div>
    )
}

export default AboutStudent