import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        background: '#999',
    },

    studentName: {

        color: 'red',
        fontWeight: 100,

        '&hover': {

            color: '#ccc',
        },
    },
    '@media (min-width: 600px': {

        studentName: {
            fontSize: 50,

        },
    }
})

export default useStyles
    