import React from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
export default function Footer(){
    return (

        <footer style={{color: "#000",marginTop:"10px"}}>

        <center style={{padding:"20px"}}>Footer</center>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
            <p>Copyright ...</p>
            <p>Lorem ipsum dolor sit amet. A perspiciatis tempore quo molestiae voluptas est voluptatem tempore. Sit dignissimos expedita ut omnis enim cum tempore eveniet quo tempore nulla ut autem cupiditate est optio possimus.</p>
            </Grid>
            <Grid item xs={12}sm={12} md={6}>
            <Link align="center">https://www.youtube.com/watch?v=ocMDaaWr-NE</Link><br/><br/>
          
            <Link align="center">https://www.chartjs.org/docs/latest/charts/doughnut.html#doughnut</Link><br/><br/>
            <Link align="center">https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/</Link><br/><br/>
            </Grid>
            </Grid>
        </footer>
    )
}