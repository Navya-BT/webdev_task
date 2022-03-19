import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
// import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
const columns = [
  {
    field: "image",
    headerName: "image",
    width: 250,
    height: 250,
    renderCell: (params) => <img src={params.value} />
  },
  {
    field: "description",
    headerName: "description",
  
    width: 550,
    height: 550,
  }
];
// const theme =
// createMuiTheme({
//   root: {
//     "& .MuiDataGrid-cell": {
    
//         backgroundColor: "#FF0000",
      
//     },
   
//   },
// });

const rows = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/300px-Gull_portrait_ca_usa.jpg",
 
description:"Lorem ipsum dolor sit amet. Aut odit sequi et voluptatem eligendi eos quia molestiae et eveniet tempora aut dolores neque. Et commodi ipsum ut exercitationem nesciunt et veritatis galisum sed sequi odit ut natus sint vel adipisci repellat sed asperiores dolor. Non vitae nisi eum suscipit voluptate aut officiis temporibus eum atque sunt. Id earum deleniti sit illum laborum sit cumque consequuntur vel recusandae praesentium.",
      
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_iZ6jdRilQUMSI3Fsj1DmT_f1vhUSxDHXpA4lisUxZ8kInqnTD4QE8oRPf7d1a06tP4&usqp=CAU",
      description:"Qui distinctio voluptatum nam repudiandae rerum et dolorem iusto est earum molestiae et sint molestias aut ipsum dicta et rerum cupiditate. In amet esse est eaque excepturi sed nulla molestiae eum possimus omnis vel velit suscipit rem iste quia. Et totam exercitationem aut Quis necessitatibus ut recusandae quis. ",
  }
];

export default function RenderCellGrid() {
  return (
    <div style={{ height: 500, padding:"30px" }}>
         {/* <ThemeProvider theme={theme}> */}
         <h2 style={{color:"#000"}}>Table with Image</h2>
      <DataGrid rows={rows} columns={columns} rowHeight="100%" />
      {/* </ThemeProvider> */}
    </div>
  );
}
