import React, {useState,useEffect} from 'react';
import './App.css';
import './index.css';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { Tooltip } from '@material-ui/core';
import GetAppIcon from '@mui/icons-material/GetApp';
import Button from '@mui/material/Button';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { getInputBaseUtilityClass } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


function MyMatTable({currentStep}) {

    const [state, setState] = React.useState({open:false,vertical:'bottom',horizontal:'right'});

    const {vertical, horizontal, open} = state

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false });
    };




    const location = useLocation();
 //   console.log('location value is ',location.state);
    const mybearer = location.state; 

 // const getData = async () => {
 //     try {
 //           const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1oWOuOYONJfLAI0-x7oEr3bwZrsuHrQoEx33v2oL9yJ4/values/Sheet1!A2:AP209?key=AIzaSyAADV25LrQHYB_ZqbBUoocgvdkL-VJWWhQ');
 //           const data = await res.json();
//            console.log('DATA from API => ',data);
//          }
//       catch (error) {
//            console.log(error);
//       }   
//  }; 
//  useEffect(()=>{ getData()},[]); 

  const [tableData, setTableData] = useState([]);
 
  //'https://opensheet.vercel.app/1o5t26He2DzTweYeleXOGiDjlU4Jkx896f95VUHVgS8U/Sheet+One'
 // "https://sheets.googleapis.com/v4/spreadsheets/1oWOuOYONJfLAI0-x7oEr3bwZrsuHrQoEx33v2oL9yJ4/values/Sheet1!A1:AP209?key=AIzaSyAADV25LrQHYB_ZqbBUoocgvdkL-VJWWhQ"
  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/1oWOuOYONJfLAI0-x7oEr3bwZrsuHrQoEx33v2oL9yJ4/gviz/tq?key=AIzaSyAADV25LrQHYB_ZqbBUoocgvdkL-VJWWhQ")
      .then(resp => resp.text())
      .then(data => {
        //  console.log('data xxx ',data)
        //  const temp = data.substr(47).slice(0,-2);
        
          const temp = data.substring(47).slice(0,-2);
          const json = JSON.parse(temp);
    //      console.log(json.table.rows);
          const rows = json.table.rows;
         
          var finishArr = [];
          
          var strX = "";
          var rowObj = {}; 
          rows.forEach((row,index1,arr1)=>{
    //         console.log('index1 ',index1) 
             if (index1 >= 0){
                const temp1 = row.c;
               
                         
                         var strRow = "";
                         temp1.forEach((item,index2,arr2)=>{
                            
                            //item means value of each cell
                            if (index2 === 0) {
                          
                            }
                            
                            switch (index2) {
                                 
                                case 0:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `{"avata" : "",` : strRow = strRow + `{"avata" : "data:image/png;base64,${arr2[index2].v}",`;                           
                                    break;
                                case 1:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"name" : "",` : strRow = strRow + `"name" : "${arr2[index2].v}",`;
                                    break;      
                                case 2:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"studio" : "",` : strRow = strRow + `"studio" : "${arr2[index2].v}",`;
                                    break;
                                case 3:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"portfolio" : "",` : strRow = strRow + `"portfolio" : "${arr2[index2].v}",`;
                                    break;  
                                case 4:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"sector" : "",` : strRow = strRow + `"sector" : "${arr2[index2].v}",`;
                                    break;
                                case 5:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"email" : "",` : strRow = strRow + `"email" : "${arr2[index2].v}",`;
                                    break;
                                case 6:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"JobTitle" : "",` : strRow = strRow + `"JobTitle" : "${arr2[index2].v}",`;
                                     break;        
                                case 7:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"businessDev" : "",` : strRow = strRow + `"businessDev" : "${arr2[index2].v}",`;
                                    break;
                                case 8:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"designCre" : "",` : strRow = strRow + `"designCre" : "${arr2[index2].v}",`;
                                    break;  
                                case 9:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"documentation" : "",` : strRow = strRow + `"documentation" : "${arr2[index2].v}",`;
                                    break;
                                case 10:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"projectCli" : "",` : strRow = strRow + `"projectCli" : "${arr2[index2].v}",`;
                                    break;
                                case 11:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"siteCoo" : "",` : strRow = strRow + `"siteCoo" : "${arr2[index2].v}",`;
                                    break;           
                                case 12:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"projectTea" : "",` : strRow = strRow + `"projectTea" : "${arr2[index2].v}",`;
                                    break;      
                                case 13:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"ffe" : "",` : strRow = strRow + `"ffe" : "${arr2[index2].v}",`;
                                    break;
                                case 14:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"smallTea" : "",` : strRow = strRow + `"smallTea" : "${arr2[index2].v}",`;
                                    break;  
                                case 15:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"sustainDes" : "",` : strRow = strRow + `"sustainDes" : "${arr2[index2].v}",`;
                                    break;
                                case 16:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"projectMan" : "",` : strRow = strRow + `"projectMan" : "${arr2[index2].v}",`;
                                    break;   
                                case 17:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"interiorDes" : "",` : strRow = strRow + `"interiorDes" : "${arr2[index2].v}",`;
                                    break;
                                case 18:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"architect" : "",` : strRow = strRow + `"architect" : "${arr2[index2].v}",`;
                                    break;  
                                case 19:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"sustainDis" : "",` : strRow = strRow + `"sustainDis" : "${arr2[index2].v}",`;
                                    break;
                                case 20:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"ffeDis" : "",` : strRow = strRow + `"ffeDis" : "${arr2[index2].v}",`;
                                    break;
                                case 21:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"bimCap" : "",` : strRow = strRow + `"bimCap" : "${arr2[index2].v}",`;
                                    break;
                                case 22:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"bimTec" : "",` : strRow = strRow + `"bimTec" : "${arr2[index2].v}",`;
                                    break;
                                case 23:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"threeD" : "",` : strRow = strRow + `"threeD" : "${arr2[index2].v}",`;
                                    break;      
                                case 24:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"graphics" : "",` : strRow = strRow + `"graphics" : "${arr2[index2].v}",`;
                                    break;
                                case 25:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevHos" : "",` : strRow = strRow + `"expLevHos" : "${arr2[index2].v}",`;
                                    break;  
                                case 26:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorHos" : "",` : strRow = strRow + `"expWorHos" : "${arr2[index2].v}",`;
                                    break;
                                case 27:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevFnB" : "",` : strRow = strRow + `"expLevFnB" : "${arr2[index2].v}",`;
                                    break;   
                                case 28:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorFnB" : "",` : strRow = strRow + `"expWorFnB" : "${arr2[index2].v}",`;
                                     break;       
                                case 29:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevRes" : "",` : strRow = strRow + `"expLevRes" : "${arr2[index2].v}",`;
                                    break;
                                case 30:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorRes" : "",` : strRow = strRow + `"expWorRes" : "${arr2[index2].v}",`;
                                    break;  
                                case 31:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevSen" : "",` : strRow = strRow + `"expLevSen" : "${arr2[index2].v}",`;
                                    break;
                                case 32:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorSen" : "",` : strRow = strRow + `"expWorSen" : "${arr2[index2].v}",`;
                                    break;
                                case 33:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevRet" : "",` : strRow = strRow + `"expLevRet" : "${arr2[index2].v}",`;
                                    break;           
                                case 34:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorRet" : "",` : strRow = strRow + `"expWorRet" : "${arr2[index2].v}",`;
                                    break;      
                                case 35:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevWor" : "",` : strRow = strRow + `"expLevWor" : "${arr2[index2].v}",`;
                                    break;
                                case 36:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorWor" : "",` : strRow = strRow + `"expWorWor" : "${arr2[index2].v}",`;
                                    break;  
                                case 37:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevHea" : "",` : strRow = strRow + `"expLevHea" : "${arr2[index2].v}",`;
                                    break;
                                case 38:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorHea" : "",` : strRow = strRow + `"expWorHea" : "${arr2[index2].v}",`;
                                    break;   
                                case 39:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevEdu" : "",` : strRow = strRow + `"expLevEdu" : "${arr2[index2].v}",`;
                                    break;
                                case 40:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorEdu" : "",` : strRow = strRow + `"expWorEdu" : "${arr2[index2].v}",`;
                                    break;  
                                case 41:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLevSpo" : "",` : strRow = strRow + `"expLevSpo" : "${arr2[index2].v}",`;
                                    break;
                                case 42:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorSpo" : "",` : strRow = strRow + `"expWorSpo" : "${arr2[index2].v}",`;
                                    break;
                                case 43:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expLivCiv" : "",` : strRow = strRow + `"expLivCiv" : "${arr2[index2].v}",`;
                                    break; 
                                case 44:
                                    typeof item === 'undefined' || item === null ? strRow = strRow + `"expWorCiv" : ""` : strRow = strRow + `"expWorCiv" : "${arr2[index2].v}"`;
                                    break;                               
            
                            }
                             
                         }) //forEach

                         rowObj =  `${strRow}}`; 
             //            console.log(rowObj)
                         strX = JSON.parse(rowObj);  
                         finishArr.push(strX);

             } //index1


          }) //forEach
    
          console.log('finishArr',finishArr)           
          setTableData(finishArr);
        //  console.log('ORIGINAL ->',tableData) 
      }) //data
   }, [])

  
  const columns=[
     
      {title:"Photo", field:"avata", render: rowData => <CardMedia component="img" src={rowData.avata}    name={rowData === undefined ? " " : rowData.name}   />},
      {title:"Name", field:"name", sorting:false,filtering:false,cellStyle:{color:"blue"},headerStyle:{color:"#fff"}},
      {title:"Studio", field:"studio",lookup:{0:"Adelaide",1:"Bangkok",2:"BKK Secondment",3:"Brisbane",4:"Dubai",5:"Ho Chi Minh",6:"Manila",7:"Melbourne",8:"Newcastle",9:"Singapore",10:"Sydney"}}, 
      {title:"Portfolio", field:"portfolio",lookup:{0:"Community",1:"Lifestyle",2:"Workplace"}},
      {title:"Sector", field:"sector",lookup:{0:"Hospitality",1:"F&B",2:"Residential",3:"Seniors Living",4:"Retail",5:"Worksplaces",6:"Health",7:"Education",8:"Sport & Leisure",9:"Civic"}}, 
      {title:"Email", field:"email"},
      {title:"Job Title", field:"JobTitle"},

      {title:"Business Development", field:"businessDev", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Design & Creativity", field:"designCre", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Documentation", field:"documentation", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Project & Client Management", field:"projectCli", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Site Coordination", field:"siteCoo", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Project Team Leadership", field:"projectTea", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"FF&E / Styling", field:"ffe", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Small Team Management", field:"smallTea", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
      {title:"Sustainability Design", field:"sustainDes", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 0 ? false:true),headerStyle:{backgroundColor:"#6699ff",color:"white"}},
 
      {title:"Project Management", field:"projectMan", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"Interior Design", field:"interiorDes", lookup:{0:"No Experience",1:"Entry Level < 3 yrs",2: "Moderate 3-5 yrs",3: "Proficient - Snr ID",4:"Expert - ADD,DD"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"Architect", field:"architect", lookup:{0:"No Experience",1:"Entry Level - Arch Asst",2: "Moderate - Arch Grad",3: "Proficient - Regd Arch",4:"Expert - Regd 5+yrs"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"Sustainability", field:"sustainDis", lookup:{0:"No accreditation",1:"LEED",2: "Greenstar",3: "Well",4:"LEED + Greenstar",5:"LEED + Well",6:"Greenstar + Well"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"FF&E / Styling", field:"ffeDis", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"BIM Capability Level", field:"bimCap", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"BIM Technician", field:"bimTec", lookup:{0:"No Experience",1:"Coordinator Level",2: "Snr Coordinator Level",3: "Subject Matter Expert",4:"BIM Management Level"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"3D Visualisation", field:"threeD", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
      {title:"Graphics", field:"graphics", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 1 ? false:true),headerStyle:{backgroundColor:"#006600",color:"white"}},
   
      {title:"Exp Level", field:"expLevHos", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorHos", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}}, 
      {title:"Exp Level", field:"expLevFnB", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorFnB", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}}, 
      {title:"Exp Level", field:"expLevRes", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorRes", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},  
      {title:"Exp Level", field:"expLevSen", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorSen", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}}, 
      {title:"Exp Level", field:"expLevRet", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorRet", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 2 ? false:true),headerStyle:{backgroundColor:"#ffb3ff",color:"white"}},  

      {title:"Exp Level", field:"expLevWor", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 3 ? false:true),headerStyle:{backgroundColor:"#9966ff",color:"white"}},
      {title:"Exp Work Type", field:"expWorWor", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 3 ? false:true),headerStyle:{backgroundColor:"#9966ff",color:"white"}},  

      {title:"Exp Level", field:"expLevHea", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},
      {title:"Exp Work Type", field:"expWorHea", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}}, 
      {title:"Exp Level", field:"expLevEdu", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},
      {title:"Exp Work Type", field:"expWorEdu", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}}, 
      {title:"Exp Level", field:"expLevSpo", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},
      {title:"Exp Work Type", field:"expWorSpo", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},  
      {title:"Exp Level", field:"expLivCiv", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},
      {title:"Exp Work Type", field:"expWorCiv", lookup:{0:"No Experience",1:"Observation",2: "Documentation",3: "Design",4:"Project Leader"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}}, 
 
    ]  


  return (
    <div className="App">
      <Paper variant="outlined" >
         <MaterialTable 
            columns={columns} 
            data={tableData}
            editable={{
                onRowAdd: newRow => new Promise( (resolve,reject) => {
            /*        console.log('newRow ->',newRow)  */
                    setTableData([...tableData,newRow])
                        
                    setTimeout(()=> resolve(),500);
                }),
                onRowUpdate: (newRow,oldRow) => new Promise((resolve,reject)=>{
                  /*  console.log(newRow,oldRow); */
                  const updateData = [...tableData];
                  updateData[oldRow.tableData.id] = newRow;
                  setTableData(updateData);

                    setTimeout(()=>resolve(),500);
                }),
                onRowDelete: (selectedRow)=>new Promise((resolve,reject)=>{
                    const updateData = [...tableData];
                    updateData.splice(selectedRow.tableData.id,1);
                    setTableData(updateData);
                  /*  console.log(selectedRow); */
                    setTimeout(()=>resolve(),500);
                })
            }}
            actions={[
                { icon: ()=><Button variant='contained' startIcon={<StorageIcon />}  >Save To Database</Button>,
                    tooltip: "Warning! Please press this button every time after you finish modified data to save all your changes to Database.",
                    onClick: (data)=> {
                        const modifiedData = [...tableData] 
                /*        console.log("click save to DB ",modifiedData);   */
                /*        console.log("SAYAMPOL ",mybearer);    */
                        var outterArray = [];
                        var outputStr = "";

                        for (var i = 0;i < modifiedData.length; i++){
                            var innerArray = [];
                            innerArray.push(typeof modifiedData[i].avata === 'undefined' || modifiedData[i].avata === "" ? "" : modifiedData[i].avata.slice(22))
                            innerArray.push(typeof modifiedData[i].name === 'undefined' || modifiedData[i].name === "" ? "" : modifiedData[i].name)
                            innerArray.push(typeof modifiedData[i].studio === 'undefined' || modifiedData[i].studio === "" ? "" : modifiedData[i].studio)
                            innerArray.push(typeof modifiedData[i].portfolio === 'undefined' || modifiedData[i].portfolio === "" ? "" : modifiedData[i].portfolio)
                            innerArray.push(typeof modifiedData[i].sector === 'undefined' || modifiedData[i].sector === "" ? "" : modifiedData[i].sector)
                            innerArray.push(typeof modifiedData[i].email === 'undefined' || modifiedData[i].email === "" ? "" : modifiedData[i].email)
                            innerArray.push(typeof modifiedData[i].JobTitle === 'undefined' || modifiedData[i].JobTitle === "" ? "" : modifiedData[i].JobTitle)
                            innerArray.push(typeof modifiedData[i].businessDev === 'undefined' || modifiedData[i].businessDev === "" || modifiedData[i].businessDev === "null" ? "" : modifiedData[i].businessDev)
                            innerArray.push(typeof modifiedData[i].designCre === 'undefined' || modifiedData[i].designCre === "" || modifiedData[i].designCre === "null" ? "" : modifiedData[i].designCre)
                            innerArray.push(typeof modifiedData[i].documentation === 'undefined' || modifiedData[i].documentation === "" || modifiedData[i].documentation === "null"  ? "" : modifiedData[i].documentation)
                            innerArray.push(typeof modifiedData[i].projectCli === 'undefined' || modifiedData[i].projectCli === "" || modifiedData[i].projectCli === "null" ? "" : modifiedData[i].projectCli)
                            innerArray.push(typeof modifiedData[i].siteCoo === 'undefined' || modifiedData[i].siteCoo === "" || modifiedData[i].siteCoo === "null" ? "" : modifiedData[i].siteCoo)
                            innerArray.push(typeof modifiedData[i].projectTea === 'undefined' || modifiedData[i].projectTea === "" || modifiedData[i].projectTea === "null" ? "" : modifiedData[i].projectTea)
                            innerArray.push(typeof modifiedData[i].ffe === 'undefined' || modifiedData[i].ffe === "" || modifiedData[i].ffe === "null" ? "" : modifiedData[i].ffe)
                            innerArray.push(typeof modifiedData[i].smallTea === 'undefined' || modifiedData[i].smallTea === "" || modifiedData[i].smallTea === "null" ? "" : modifiedData[i].smallTea)
                            innerArray.push(typeof modifiedData[i].sustainDes === 'undefined' || modifiedData[i].sustainDes === "" || modifiedData[i].sustainDes === "null" ? "" : modifiedData[i].sustainDes)
                            innerArray.push(typeof modifiedData[i].peojectMan === 'undefined' || modifiedData[i].peojectMan === "" || modifiedData[i].peojectMan === "null" ? "" : modifiedData[i].peojectMan)
                            innerArray.push(typeof modifiedData[i].interiorDes === 'undefined' || modifiedData[i].interiorDes === "" || modifiedData[i].interiorDes === "null" ? "" : modifiedData[i].interiorDes) 
                            innerArray.push(typeof modifiedData[i].architect === 'undefined' || modifiedData[i].architect === "" || modifiedData[i].architect === "null" ? "" : modifiedData[i].architect)
                            innerArray.push(typeof modifiedData[i].sustainDis === 'undefined' || modifiedData[i].sustainDis === "" || modifiedData[i].sustainDis === "null" ? "" : modifiedData[i].sustainDis)
                            innerArray.push(typeof modifiedData[i].ffeDis === 'undefined' || modifiedData[i].ffeDis === "" || modifiedData[i].ffeDis === "null" ? "" : modifiedData[i].ffeDis)
                            innerArray.push(typeof modifiedData[i].bimCap === 'undefined' || modifiedData[i].bimCap === "" || modifiedData[i].bimCap === "null" ? "" : modifiedData[i].bimCap)
                            innerArray.push(typeof modifiedData[i].bimTec === 'undefined' || modifiedData[i].bimTec === "" || modifiedData[i].bimTec === "null" ? "" : modifiedData[i].bimTec)
                            innerArray.push(typeof modifiedData[i].threeD === 'undefined' || modifiedData[i].threeD === "" || modifiedData[i].threeD === "null" ? "" : modifiedData[i].threeD)
                            innerArray.push(typeof modifiedData[i].graphics === 'undefined' || modifiedData[i].graphics === "" || modifiedData[i].graphics === "null" ? "" : modifiedData[i].graphics)
                            innerArray.push(typeof modifiedData[i].expLevHos === 'undefined' || modifiedData[i].expLevHos === "" || modifiedData[i].expLevHos === "null" ? "" : modifiedData[i].expLevHos)
                            innerArray.push(typeof modifiedData[i].expWorHos === 'undefined' || modifiedData[i].expWorHos === "" || modifiedData[i].expWorHos === "null" ? "" : modifiedData[i].expWorHos)
                            innerArray.push(typeof modifiedData[i].expLevFnB === 'undefined' || modifiedData[i].expLevFnB === "" || modifiedData[i].expLevFnB === "null" ? "" : modifiedData[i].expLevFnB)
                            innerArray.push(typeof modifiedData[i].expWorFnB === 'undefined' || modifiedData[i].expWorFnB === "" || modifiedData[i].expWorFnB === "null" ? "" : modifiedData[i].expWorFnB)
                            innerArray.push(typeof modifiedData[i].expLevRes === 'undefined' || modifiedData[i].expLevRes === "" || modifiedData[i].expLevRes === "null" ? "" : modifiedData[i].expLevRes)
                            innerArray.push(typeof modifiedData[i].expWorRes === 'undefined' || modifiedData[i].expWorRes === "" || modifiedData[i].expWorRes === "null" ? "" : modifiedData[i].expWorRes)
                            innerArray.push(typeof modifiedData[i].expLevSen === 'undefined' || modifiedData[i].expLevSen === "" || modifiedData[i].expLevSen === "null" ? "" : modifiedData[i].expLevSen)
                            innerArray.push(typeof modifiedData[i].expWorSen === 'undefined' || modifiedData[i].expWorSen === "" || modifiedData[i].expWorSen === "null" ? "" : modifiedData[i].expWorSen)
                            innerArray.push(typeof modifiedData[i].expLevRet === 'undefined' || modifiedData[i].expLevRet === "" || modifiedData[i].expLevRet === "null" ? "" : modifiedData[i].expLevRet)
                            innerArray.push(typeof modifiedData[i].expWorRet === 'undefined' || modifiedData[i].expWorRet === "" || modifiedData[i].expWorRet === "null" ? "" : modifiedData[i].expWorRet)
                            innerArray.push(typeof modifiedData[i].expLevWor === 'undefined' || modifiedData[i].expLevWor === "" || modifiedData[i].expLevWor === "null" ? "" : modifiedData[i].expLevWor)
                            innerArray.push(typeof modifiedData[i].expWorWor === 'undefined' || modifiedData[i].expWorWor === "" || modifiedData[i].expWorWor === "null" ? "" : modifiedData[i].expWorWor)
                            innerArray.push(typeof modifiedData[i].expLevHea === 'undefined' || modifiedData[i].expLevHea === "" || modifiedData[i].expLevHea === "null" ? "" : modifiedData[i].expLevHea) 
                            innerArray.push(typeof modifiedData[i].expWorHea === 'undefined' || modifiedData[i].expWorHea === "" || modifiedData[i].expWorHea === "null" ? "" : modifiedData[i].expWorHea)
                            innerArray.push(typeof modifiedData[i].expLevEdu === 'undefined' || modifiedData[i].expLevEdu === "" || modifiedData[i].expLevEdu === "null" ? "" : modifiedData[i].expLevEdu)
                            innerArray.push(typeof modifiedData[i].expWorEdu === 'undefined' || modifiedData[i].expWorEdu === "" || modifiedData[i].expWorEdu === "null" ? "" : modifiedData[i].expWorEdu)
                            innerArray.push(typeof modifiedData[i].expLevSpo === 'undefined' || modifiedData[i].expLevSpo === "" || modifiedData[i].expLevSpo === "null" ? "" : modifiedData[i].expLevSpo)
                            innerArray.push(typeof modifiedData[i].expWorSpo === 'undefined' || modifiedData[i].expWorSpo === "" || modifiedData[i].expWorSpo === "null" ? "" : modifiedData[i].expWorSpo)
                            innerArray.push(typeof modifiedData[i].expLivCiv === 'undefined' || modifiedData[i].expLivCiv === "" || modifiedData[i].expLivCiv === "null" ? "" : modifiedData[i].expLivCiv)
                            innerArray.push(typeof modifiedData[i].expWorCiv === 'undefined' || modifiedData[i].expWorCiv === "" || modifiedData[i].expWorCiv === "null" ? "" : modifiedData[i].expWorCiv)
                            outterArray.push(innerArray)
                            
                            if ( i !== modifiedData.length ){
                                 var yy = `'${innerArray[0]}',
                                        '${innerArray[1]}',
                                        '${innerArray[2]}',
                                        '${innerArray[3]}',
                                        '${innerArray[4]}',
                                        '${innerArray[5]}',
                                        '${innerArray[6]}',
                                        '${innerArray[7]}',
                                        '${innerArray[8]}',
                                        '${innerArray[9]}',
                                        '${innerArray[10]}',
                                        '${innerArray[11]}',
                                        '${innerArray[12]}',
                                        '${innerArray[13]}',
                                        '${innerArray[14]}',
                                        '${innerArray[15]}',
                                        '${innerArray[16]}',
                                        '${innerArray[17]}',
                                        '${innerArray[18]}',
                                        '${innerArray[19]}',  
                                        '${innerArray[20]}',
                                        '${innerArray[21]}',
                                        '${innerArray[22]}',
                                        '${innerArray[23]}',
                                        '${innerArray[24]}',
                                        '${innerArray[25]}',
                                        '${innerArray[26]}',
                                        '${innerArray[27]}',
                                        '${innerArray[28]}',
                                        '${innerArray[29]}',
                                        '${innerArray[30]}',
                                        '${innerArray[31]}',
                                        '${innerArray[32]}',
                                        '${innerArray[33]}',
                                        '${innerArray[34]}',
                                        '${innerArray[35]}',
                                        '${innerArray[36]}',
                                        '${innerArray[37]}',
                                        '${innerArray[38]}',
                                        '${innerArray[39]}',
                                        '${innerArray[40]}',
                                        '${innerArray[41]}',
                                        '${innerArray[42]}',
                                        '${innerArray[43]}',
                                        '${innerArray[44]}'` + '],['

                            } else {
                                var yy = `'${innerArray[0]}',
                                        '${innerArray[1]}',
                                        '${innerArray[2]}',
                                        '${innerArray[3]}',
                                        '${innerArray[4]}',
                                        '${innerArray[5]}',
                                        '${innerArray[6]}',
                                        '${innerArray[7]}',
                                        '${innerArray[8]}',
                                        '${innerArray[9]}',
                                        '${innerArray[10]}',
                                        '${innerArray[11]}',
                                        '${innerArray[12]}',
                                        '${innerArray[13]}',
                                        '${innerArray[14]}',
                                        '${innerArray[15]}',
                                        '${innerArray[16]}',
                                        '${innerArray[17]}',
                                        '${innerArray[18]}',
                                        '${innerArray[19]}',  
                                        '${innerArray[20]}',
                                        '${innerArray[21]}',
                                        '${innerArray[22]}',
                                        '${innerArray[23]}',
                                        '${innerArray[24]}',
                                        '${innerArray[25]}',
                                        '${innerArray[26]}',
                                        '${innerArray[27]}',
                                        '${innerArray[28]}',
                                        '${innerArray[29]}',
                                        '${innerArray[30]}',
                                        '${innerArray[31]}',
                                        '${innerArray[32]}',
                                        '${innerArray[33]}',
                                        '${innerArray[34]}',
                                        '${innerArray[35]}',
                                        '${innerArray[36]}',
                                        '${innerArray[37]}',
                                        '${innerArray[38]}',
                                        '${innerArray[39]}',
                                        '${innerArray[40]}',
                                        '${innerArray[41]}',
                                        '${innerArray[42]}',
                                        '${innerArray[43]}',
                                        '${innerArray[44]}'` + ']]'

                            }
                            outputStr = outputStr + yy
                          


                        }

                    //    console.log('OutterArray is ',outterArray) 
                        var axios = require('axios');

                        var config = {
                           method: 'post',
                           url: `https://sheets.googleapis.com/v4/spreadsheets/1oWOuOYONJfLAI0-x7oEr3bwZrsuHrQoEx33v2oL9yJ4/values/Sheet1!A2:AS200:clear?access_token=${mybearer}`,
                           headers: {}
                        };

                        axios(config)
                        .then(function (response) {
                        //    console.log(JSON.stringify(response.data));
                            
                            var axiosAppend = require('axios')
                        //    var dataRange = '{"values": [["test1","test2"],["test3","test4"],["test5","test6"]],"majorDimension": "ROWS"}'
                        //    var dataRange = '{"values": [[' + `'${x1}','${x2}'` + '],[ ' + `'${x3}','${x4}'` + '],[' + `'${x5}','${x6}'` + ']]' + ',"majorDimension": "ROWS"}'
                        var dataRange = '{"values": [[' + outputStr + ']]' + ',"majorDimension": "ROWS"}'
                       
                        /*    console.log('dataRange => ',dataRange)  */
                            var configAppend = {
                                method: 'post',
                                url: 'https://sheets.googleapis.com/v4/spreadsheets/1oWOuOYONJfLAI0-x7oEr3bwZrsuHrQoEx33v2oL9yJ4/values/Sheet1!A2:AS200:append?valueInputOption=USER_ENTERED',
                                headers: {
                                    'Authorization':`Bearer ${mybearer}`, 
                                    'Content-Type': 'text/plain'
                                },
                                data: dataRange
                            };
                            axiosAppend(configAppend) 
                                .then(function (response){
                            /*        console.log(JSON.stringify(response.data));   */
                                    setState({ ...state, open: true });
                                    
                                })
                                .catch(function(error){
                                    console.log(error) 
                                }) 
                            
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    //************************************************************************************************
                    
                    
                    

                    //************************************************************************************************
                    
                       

                    },
                    isFreeAction: true 
                  } 
            ]}
            onSelectionChange={(selectedRows)=>console.log(selectedRows)}
            options={{sorting:true,
                      search:true,
                      searchText:"",
                      searchFieldAlignment:"right",
                      searchAutoFocus:true,
                      searchFieldVariant:"standard",
                      filtering:false,
                      paging:true,
                      pageSizeOptions:[5,10,20,25,50,100],
                      pageSize:5,
                      paginationType:"stepped",
                      showFirstLastPageButtons:false,
                      paginationPosition:"bottom",
                      exportButton:true,
                      exportAllData:true,
                      exportFileName:"TableData",
                      addRowPosition: "first",
                      actionsColumnIndex: -1,
                      selection: true,
                      showSelectAllCheckbox: false,
                      showTextRowsSelected: false,
                      
                      grouping: true,
                      columnsButton: true,
                      rowStyle: (data,index)=> index%2===0 ? {background: "#f5f5f5"} : null,
                      headerStyle: {background: "#b3b3b3",fontStyle: "italic",borderStyle:"solid",borderWidth:"thin",borderColor:"whitesmoke"}
                     
                    }} 
            title="Capability and skills matrix" 
            icons={{Add:()=><AddIcon />}}
            
         />
      </Paper>   
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical,horizontal}}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Update completed!
            </Alert>
      </Snackbar>
    </div>
  );
}

export default MyMatTable;
