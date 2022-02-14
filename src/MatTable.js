import React, {useState} from 'react';
import './App.css';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { Button, Tooltip } from '@material-ui/core';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddIcon from '@mui/icons-material/Add';


function MatTable({currentStep}) {
    console.log('katang -> ',currentStep)
  const [mycheckStep, setMyCheckStep] = useState("A"); 
  const [tableData, setTableData] = useState([
      {name:"sayampol",email:"sayampol.c@dwp.com",phone:7894561235,age:null,gender:"M",city:"Samutprakarn",fee:123456},
      {name:"kanjana",email:"kanjana@kmitl.com",phone:1234567584,age:45,gender:"F",city:"Bangkok",fee:200000},
      {name:"vichai",email:"vichai@ett.com",phone:1144257822,age:35,gender:"M",city:"Chonburi",fee:300000},
      {name:"sompong",email:"sompong@ttec.com",phone:4567895552,age:27,gender:"M",city:"Bangkok",fee:222556},
  ])
  
  const columns=[      
      {title:"Name", field:"name", sorting:false,filtering:false,cellStyle:{color:"blue"},headerStyle:{color:"#fff"}},
      {title:"Email", field:"email",filterPlaceholder:"Filter by email"},
      {title:"Phone Number", field:"phone", align:"center",grouping:false,hidden:(currentStep === 1 ? false:true)},
      {title:"Age", field:"age",emptyValue:() => <em>null</em>,defaultSort:"asc",searchable:false,export:false,
          render: (rowData)=> <div style={{background: rowData.age>27 ? "Green" :"red"}}>{rowData.age}</div>,hidden:(currentStep === 1 ? false:true)},
      {title:"Gender", field:"gender",lookup:{M:"Male",F:"Female"},hidden:(currentStep ===1 ? false:true)},
      {title:"City", field:"city",hidden:(currentStep === 1 ? false:true)},
      {title:"School Fee", field:"fee",type:"currency",currencySetting:{currencyCode:"THB",minimumFractionDigits:0},hidden:(currentStep === 1 ? false:true)},
  ]  
  
    

  return (
    <div className="App"  >
      <Paper variant="outlined" >   
         <Button onClick={() => setMyCheckStep("B")} >TEST MY STATUS</Button>  
         <MaterialTable 
            columns={columns} 
            data={tableData}
            editable={{
                onRowAdd: (newRow) => new Promise( (resolve,reject) => {
                    
                   
                    setTableData([...tableData,newRow]);
                    setTimeout(()=>resolve(),1000);
                }),
                onRowUpdate: (newRow,oldRow) => new Promise((resolve,reject)=>{
                  /*  console.log(newRow,oldRow); */
                  const updateData = [...tableData];
                  updateData[oldRow.tableData.id] = newRow;
                  setTableData(updateData);

                    setTimeout(()=>resolve(),1000);
                }),
                onRowDelete: (selectedRow)=>new Promise((resolve,reject)=>{
                    const updateData = [...tableData];
                    updateData.splice(selectedRow.tableData.id,1);
                    setTableData(updateData);
                  /*  console.log(selectedRow); */
                    setTimeout(()=>resolve(),1000);
                })
            }}
            actions={[
              { icon: ()=><GetAppIcon />,
                Tooltip: "Click me",
                onClick: (e,data)=>console.log(data),
              //  isFreeAction: true 
              } 
            ]}
            onSelectionChange={(selectedRows)=>console.log(selectedRows)}
            options={{sorting:true,
                      search:true,
                      searchText:"",
                      searchFieldAlignment:"right",
                      searchAutoFocus:true,
                      searchFieldVariant:"standard",
                      filtering:true,
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
                      selectionProps: rowData => ({
                          disabled: rowData.name==="sayampol",
                          color: "primary"
                      }),
                      grouping: true,
                      columnsButton: true,
                      rowStyle: (data,index)=> index%2===0 ? {background: "#f5f5f5"} : null,
                      headerStyle: {background: "green",fontStyle: "italic"}
                    }} 
            title="Student Information" 
            icons={{Add:()=><AddIcon />}}
         />
      </Paper>   
    </div>
  );
}

export default MatTable;
