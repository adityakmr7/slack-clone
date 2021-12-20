import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChatField, DisplayChat } from '../components'
import { AppContainer } from '../containers'
import { useAppState } from '../context/AppProvider';

function Dashboard() {
    const {dispatch} = useAppState();
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('user')

        if (authToken) {
            navigate('/');
            const parseUser = JSON.parse(authToken);
            dispatch({
                type: "AUTH_USER",
                payload:parseUser
            })
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
       <AppContainer>

          <Box>
              <h1>Welcome to the Slack Clone</h1>
          </Box>
          <ChatField/>

       </AppContainer>
    )
}

export default Dashboard
