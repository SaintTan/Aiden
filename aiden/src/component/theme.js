import { styled, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// ***************************CREATE THEME**************************** //

export const theme = createMuiTheme({

    palette: {
        primary:
        {
            main: '#132E52',
            light: '#E8F2D8',
            dark: '#132E52',
        },
        secondary:
        {
            main: '#FBDF3D',
        },
        // textPrimary: '#002E18',
        // textSecondary: '#132E52',

    },
    typography: {
        body1:
        {
            fontFamily:[
                'avenir',
                'helvetica',
            ].join(','),
            fontSize: 16,
        }
    }
})

// ***************************EXPORT STYLES FOR CLASSES**************************** //

export const useStyles = makeStyles((theme) => ({

    copyright: {
      margin: theme.spacing(20,0,5),
      width: '100%',
    },


    titlePage: {
      width: '100%',
      height: '70vh',
    },
    title: {
        /* set heading position */
        position: 'relative',
        top: '50%',
    },
    header: {
        /* set header space under nav bar */
        height: '8vh',
    },

    titleAnimation: {
      animation: `$titleAnimation 5s 1`
    },

    '@keyframes titleAnimation': {
      '0%': {
        color: "#fff",
      },
      '100%': {
        color: "#002E18",
      }
    },
})
)



// ***************************STYLED COMPONENTS**************************** //

export const PrimButton = styled(Button)({
    background: 'transparent',
    border: '2px solid',
    borderColor:'#132E52',
    borderRadius: 3,
    color: '#132E52',
    height: 48,
    padding: '0 30px',
    fontFamily: [
        'avenir',
        'roboto',
    ].join(','),
    margin: theme.spacing(2,4,2,4),
    letterSpacing: 3,
    fontSize:18,
    fontWeight: 'bold',
    '&:hover': {
        background: "#132E52",
        color: '#fff',
    },
});

export const SecButton = styled(Button)({
    background: '#132E52',
    border: 0,
    borderRadius: 5,
    color: '#fff',
    height: 30,
    fontSize: 12,
    padding: '0 30px',
    fontFamily: [
        'avenir',
        'roboto',
    ].join(','),
    margin: theme.spacing(2,2,2,2),
    '&:hover': {
        background: "#132E52",
        color: "#fff",
    },
});

export const H1 = styled(Typography)({
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
    fontSize: 48,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
})

export const H2 = styled(Typography)({
    color: "#002E18",
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 3,
})

export const FormLabel = styled(Typography)({
    color: "#002E18",
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
    fontSize: 14,
})

export const TextLink = styled(Link)({
    color: "#132E52",
    fontFamily: [
        'avenir',
        'roboto',
    ].join(','),
    fontSize: 14,
    letterSpacing: 0,
})

// ***************************CLASS STYLE COMPONENTS**************************** //
// export const Paper = withStyles({
//     root: {
//       marginTop: theme.spacing(4),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: '100%',
//     },
// })(Container)
// export const StyledSelect = withStyles({
//     root: {
//         display: 'flex',
//         alignItems: 'flex-start',
//     }
// }
// )