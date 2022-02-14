import React from 'react';
import GoogleLogin from 'react-google-login';
import {Avatar, Grid,Paper} from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import App from './App';
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
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';


function Logingoogle() {
    let navigate = useNavigate();
    const paperStyle = {display: "flex",flex: "column",flexFlow:"column wrap",justifyContent:"center",alignItems:"center",backgroundColor: "#c3c3c3",width:"300px",margin: "auto",marginTop:"10%",borderRadius:"10px"};
    const upperHead = {margin: "10% 10% 10% 10%" };
    const googleButtonStyle = {margin:"10% 10% 10% 10%"};
    

    const responseGoogleSuccess = (response) => {
        console.log(response);
        console.log(response.profileObj);
        console.log(response.tokenObj.token_type); 
        console.log(response.accessToken);
        const tokenParam = response.accessToken;
        navigate("/app",{state: tokenParam});
        

    };
    const responseGoogleFailure = (response) => {
        console.log('Error while Sign-in Google ' + response);
        

    };
  

  return (
     
      <Grid>
            <paper elevation={10}  >
                <div  style={paperStyle}>
                    <div style={upperHead}>
                        <Avatar><LockIcon /></Avatar>
                        <Typography>Please Sign-in before using Capability and skills matrix application.</Typography>
                    </div>        
                    
                    <div style={googleButtonStyle}>
                        <GoogleLogin
                            clientId="994206759077-5nqdmme5v15unlehpj8aeh84g7hjrt5h.apps.googleusercontent.com"
                            buttonText='Sign in with Google'
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div> 
            </paper> 
      </Grid>
     
    
  )
}

export default Logingoogle