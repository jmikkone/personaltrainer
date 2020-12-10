import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Customerslist from './components/Customerslist';
import Trainingslist from './components/Trainingslist';
import Calendar from './components/Calendar';
//import IconButton from '@material-ui/core/IconButton';
//import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
//import Trainingslist from './components/Trainingslist';
//import { useHistory } from "react-router-dom";
import{BrowserRouter,Switch,Route} from 'react-router-dom';

//import Customerslist from './components/Customerslist';
//import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
} 


function App() {
  //let history = useHistory();

  //const [open, setOpen] = useState(false);

  //const [anchorEl, setAnchorEl] = useState(null);

  /*const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; */

 
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 
 

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Typography variant='h6'>
            PERSONALTRAINER
          </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Customers" {...a11yProps(0)} ></Tab>
          <Tab label="Trainings" {...a11yProps(1)}></Tab>
          <Tab label="Calendar" {...a11yProps(2)}></Tab>
        </Tabs>
          
        </Toolbar>
      </AppBar>

      <TabPanel value={value} index={0}>
      <BrowserRouter>
      <Switch>
      <Route component={Customerslist}/>
      </Switch>
      </BrowserRouter>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <BrowserRouter>
      <Switch>
      <Route component={Trainingslist}/>
      </Switch>
      </BrowserRouter>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <BrowserRouter>
      <Switch>
      <Route component={Calendar}/>
      </Switch>
      </BrowserRouter>
      </TabPanel>
     
      
    </div>
  );
}

export default App;
