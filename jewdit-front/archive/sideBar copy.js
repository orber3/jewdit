
import { useMediaQuery } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { callbackify } from 'util';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: `130`,
    },
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: `130`,

    }
  },
  item: { 
    textAlign: 'center',
    borderBottom: '1',
    fontSize: '3rem',
  },
  text: { 
    fontSize: '3rem',
  }

}))




const SideBar = () => {
  const classes = useStyles();

const menu  = [
  {
    text: 'מנות ראשונות',
    link: '0'
  },
  {
    text: 'מנות עיקריות',
    link: '1'
  },
  {
    text: 'מנות סופיות',
    link: '2'
  },
  {
    text: 'על יהודית',
    link: '3'
  },
  {
    text: 'כתבו לי',
    link: '4'
  }

]
const theme = useTheme();

const matches = useMediaQuery(theme.breakpoints.up('sm'));
console.log(matches)


  return (
  <nav class="side-nav"> 
    <Drawer
    className={classes.drawer}
    anchor={matches ? 'right' : 'top'}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}

    > 
 <List>
{   console.log(menu)
}          {menu.map((item) => (
            <a href={`#${item.link}`} class="side__link">
            <ListItem className={classes.item} divider  button key={item.text}>
                  <ListItemText  className={classes.text} primary={item.text} />
            </ListItem>
            </a>

          ))}
        </List>
    </Drawer>

    </nav>




  )
  
   }
  
  export default SideBar;