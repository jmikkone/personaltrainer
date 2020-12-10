import React, {useState, useEffect} from 'react';
import 'react-table/react-table.css';
import moment from 'moment';
import 'moment/locale/fi';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
//import {format} from 'date-fns';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
//import DateFnsUtils from '@date-io/date-fns';
/*import {
  MuiPickersUtilsProvider,
  DatePicker, TimePicker
} from '@material-ui/pickers'; */

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  



const columns = [
    {
        title: 'Actions',
        filterable:false,
        sortable:false,
        

    },
    {
        title: 'Date',
        field: 'date',
        type: 'datetime',
        //dateSetting: {locale: 'fi') turha
        //editComponent: props => (moment().format('Do MM yyyy, h:mm')) ei muuta datetime:n formaattia halutuksi
        //render: rowData => moment('date').format('DoMM.yyyy, LT') kuten ei tämäkään
        //render: row => <span>{row['date'] /* formatting code here(mut minkälaisessa muodossa syntaxi??? En keksinyt)*/}
        //editField: date => (moment().format('Do MM yyyy, h:mm'))
    
    },
    {
        title: 'Duration',
        field: 'duration'
    },
    {
        title: 'Activity',
        field: 'activity'
    }
]

export default function Trainingslist() {
    
//const [training, setTraining] = useState({date: '', duration: '', activity: ''})
const [trainings, setTrainings] = useState([]);
    //const current = trainings[0].date;
    //const dateTimeStrg = moment(current).format('l, LT');
  
//setTrainings([...trainings, training])    


useEffect(() => fetchData(), []);

const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => setTrainings(data.content))
    
}


//console.log(trainings[0].date)
console.log(trainings);




  return (
    <div>
      <MaterialTable 
      icons={tableIcons}
      title='Trainings'
      columns={columns}
      data={trainings}
      />
    </div>
    )
}