import React, {useState,useEffect} from 'react';
import './App.css';
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

function MyMatTable({currentStep}) {
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
          const temp = data.substr(47).slice(0,-2);
          const json = JSON.parse(temp);
        //  console.log(json.table.rows);
          const rows = json.table.rows;
         
          var finishArr = [];
          
          var strX = "";
          var rowObj = {}; 
          rows.forEach((row,index1,arr1)=>{
    //         console.log('index1 ',index1) 
             if (index1 > 0){
                const temp1 = row.c;
               
                         
                         var strRow = "";
                         temp1.forEach((item,index2,arr2)=>{
                            
                            //item means value of each cell
                            if (index2 == 0) {
                          
                            }
                            
                            switch (index2) {
                                 
                                case 0:
                                    item == null ? strRow = strRow + `{"avata" : "",` : strRow = strRow + `{"avata" : "data:image/png;base64,${arr2[index2].v}",`;                           
                                    break;
                                case 1:
                                    item == null ? strRow = strRow + `"name" : "",` : strRow = strRow + `"name" : "${arr2[index2].v}",`;
                                    break;      
                                case 2:
                                    item == null ? strRow = strRow + `"studio" : "",` : strRow = strRow + `"studio" : "${arr2[index2].v}",`;
                                    break;
                                case 3:
                                    item == null ? strRow = strRow + `"portfolio" : "",` : strRow = strRow + `"portfolio" : "${arr2[index2].v}",`;
                                    break;  
                                case 4:
                                    item == null ? strRow = strRow + `"sector" : "",` : strRow = strRow + `"sector" : "${arr2[index2].v}",`;
                                    break;
                                case 5:
                                    item == null ? strRow = strRow + `"email" : "",` : strRow = strRow + `"email" : "${arr2[index2].v}",`;
                                    break;
                                case 6:
                                    item == null ? strRow = strRow + `"JobTitle" : "",` : strRow = strRow + `"JobTitle" : "${arr2[index2].v}",`;
                                     break;        
                                case 7:
                                    item == null ? strRow = strRow + `"businessDev" : "",` : strRow = strRow + `"businessDev" : "${arr2[index2].v}",`;
                                    break;
                                case 8:
                                    item == null ? strRow = strRow + `"designCre" : "",` : strRow = strRow + `"designCre" : "${arr2[index2].v}",`;
                                    break;  
                                case 9:
                                    item == null ? strRow = strRow + `"documentation" : "",` : strRow = strRow + `"documentation" : "${arr2[index2].v}",`;
                                    break;
                                case 10:
                                    item == null ? strRow = strRow + `"projectCli" : "",` : strRow = strRow + `"projectCli" : "${arr2[index2].v}",`;
                                    break;
                                case 11:
                                    item == null ? strRow = strRow + `"siteCoo" : "",` : strRow = strRow + `"siteCoo" : "${arr2[index2].v}",`;
                                    break;           
                                case 12:
                                    item == null ? strRow = strRow + `"projectTea" : "",` : strRow = strRow + `"projectTea" : "${arr2[index2].v}",`;
                                    break;      
                                case 13:
                                    item == null ? strRow = strRow + `"ffe" : "",` : strRow = strRow + `"ffe" : "${arr2[index2].v}",`;
                                    break;
                                case 14:
                                    item == null ? strRow = strRow + `"smallTea" : "",` : strRow = strRow + `"smallTea" : "${arr2[index2].v}",`;
                                    break;  
                                case 15:
                                    item == null ? strRow = strRow + `"sustainDes" : "",` : strRow = strRow + `"sustainDes" : "${arr2[index2].v}",`;
                                    break;
                                case 16:
                                    item == null ? strRow = strRow + `"projectMan" : "",` : strRow = strRow + `"projectMan" : "${arr2[index2].v}",`;
                                    break;   
                                case 17:
                                    item == null ? strRow = strRow + `"interiorDes" : "",` : strRow = strRow + `"interiorDes" : "${arr2[index2].v}",`;
                                    break;
                                case 18:
                                    item == null ? strRow = strRow + `"architect" : "",` : strRow = strRow + `"architect" : "${arr2[index2].v}",`;
                                    break;  
                                case 19:
                                    item == null ? strRow = strRow + `"sustainDis" : "",` : strRow = strRow + `"sustainDis" : "${arr2[index2].v}",`;
                                    break;
                                case 20:
                                    item == null ? strRow = strRow + `"ffeDis" : "",` : strRow = strRow + `"ffeDis" : "${arr2[index2].v}",`;
                                    break;
                                case 21:
                                    item == null ? strRow = strRow + `"bimCap" : "",` : strRow = strRow + `"bimCap" : "${arr2[index2].v}",`;
                                    break;
                                case 22:
                                    item == null ? strRow = strRow + `"bimTec" : "",` : strRow = strRow + `"bimTec" : "${arr2[index2].v}",`;
                                    break;
                                case 23:
                                    item == null ? strRow = strRow + `"threeD" : "",` : strRow = strRow + `"threeD" : "${arr2[index2].v}",`;
                                    break;      
                                case 24:
                                    item == null ? strRow = strRow + `"graphics" : "",` : strRow = strRow + `"graphics" : "${arr2[index2].v}",`;
                                    break;
                                case 25:
                                    item == null ? strRow = strRow + `"expLevHos" : "",` : strRow = strRow + `"expLevHos" : "${arr2[index2].v}",`;
                                    break;  
                                case 26:
                                    item == null ? strRow = strRow + `"expWorHos" : "",` : strRow = strRow + `"expWorHos" : "${arr2[index2].v}",`;
                                    break;
                                case 27:
                                    item == null ? strRow = strRow + `"expLevFnB" : "",` : strRow = strRow + `"expLevFnB" : "${arr2[index2].v}",`;
                                    break;   
                                case 28:
                                    item == null ? strRow = strRow + `"expWorFnB" : "",` : strRow = strRow + `"expWorFnB" : "${arr2[index2].v}",`;
                                     break;       
                                case 29:
                                    item == null ? strRow = strRow + `"expLevRes" : "",` : strRow = strRow + `"expLevRes" : "${arr2[index2].v}",`;
                                    break;
                                case 30:
                                    item == null ? strRow = strRow + `"expWorRes" : "",` : strRow = strRow + `"expWorRes" : "${arr2[index2].v}",`;
                                    break;  
                                case 31:
                                    item == null ? strRow = strRow + `"expLevSen" : "",` : strRow = strRow + `"expLevSen" : "${arr2[index2].v}",`;
                                    break;
                                case 32:
                                    item == null ? strRow = strRow + `"expWorSen" : "",` : strRow = strRow + `"expWorSen" : "${arr2[index2].v}",`;
                                    break;
                                case 33:
                                    item == null ? strRow = strRow + `"expLevRet" : "",` : strRow = strRow + `"expLevRet" : "${arr2[index2].v}",`;
                                    break;           
                                case 34:
                                    item == null ? strRow = strRow + `"expWorRet" : "",` : strRow = strRow + `"expWorRet" : "${arr2[index2].v}",`;
                                    break;      
                                case 35:
                                    item == null ? strRow = strRow + `"expLevWor" : "",` : strRow = strRow + `"expLevWor" : "${arr2[index2].v}",`;
                                    break;
                                case 36:
                                    item == null ? strRow = strRow + `"expWorWor" : "",` : strRow = strRow + `"expWorWor" : "${arr2[index2].v}",`;
                                    break;  
                                case 37:
                                    item == null ? strRow = strRow + `"expLevHea" : "",` : strRow = strRow + `"expLevHea" : "${arr2[index2].v}",`;
                                    break;
                                case 38:
                                    item == null ? strRow = strRow + `"expWorHea" : "",` : strRow = strRow + `"expWorHea" : "${arr2[index2].v}",`;
                                    break;   
                                case 39:
                                    item == null ? strRow = strRow + `"expLevEdu" : "",` : strRow = strRow + `"expLevEdu" : "${arr2[index2].v}",`;
                                    break;
                                case 40:
                                    item == null ? strRow = strRow + `"expWorEdu" : "",` : strRow = strRow + `"expWorEdu" : "${arr2[index2].v}",`;
                                    break;  
                                case 41:
                                    item == null ? strRow = strRow + `"expLevSpo" : "",` : strRow = strRow + `"expLevSpo" : "${arr2[index2].v}",`;
                                    break;
                                case 42:
                                    item == null ? strRow = strRow + `"expWorSpo" : "",` : strRow = strRow + `"expWorSpo" : "${arr2[index2].v}",`;
                                    break;
                                case 43:
                                    item == null ? strRow = strRow + `"expLevCiv" : "",` : strRow = strRow + `"expLevCiv" : "${arr2[index2].v}",`;
                                    break; 
                                case 44:
                                    item == null ? strRow = strRow + `"expWorCiv" : ""` : strRow = strRow + `"expWorCiv" : "${arr2[index2].v}"`;
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
          console.log('ORIGINAL ->',tableData) 
      }) //data
   }, [])

  
  const columns=[
     
      {title:"avatar", field:"avata", render: rowData => <CardMedia component="img" src={rowData.avata}    name={rowData === undefined ? " " : rowData.name}   />},
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
      {title:"Exp Level", field:"expLevCiv", lookup:{0:"No Experience",1:"Entry Level",2: "Moderate",3: "Proficient",4:"Expert"},hidden:(currentStep === 4 ? false:true),headerStyle:{backgroundColor:"#ffcc66",color:"white"}},
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
                    console.log('newRow ->',newRow)
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
                { icon: ()=><Button variant='contained' startIcon={<StorageIcon />}>Save To Database</Button>,
                    tooltip: "Save all changes to Database.",
                    onClick: (data)=> {
                        let modifiedData = {...tableData}
                        console.log("click save to DB ",modifiedData);
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
    </div>
  );
}

export default MyMatTable;
