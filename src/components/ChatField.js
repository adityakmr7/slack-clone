import { Box, Button, Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import db from '../config/firebase';
import firebase from 'firebase';
import { useAppState } from '../context/AppProvider';

function ChatField({channelId}) {
  const [chatInput, setChatInput] = useState('');
  const {state,dispatch} = useAppState();
  console.log('state',state);
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: chatInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: state.user.user.displayName,
        userimage:state.user.user.photoURL,
      });
    }
    setChatInput("");
  };
    return (
        <Box width={"100%"} position={"fixed"} bottom={0}>
            <Card sx={{ paddingY: 2, paddingX: 2 }}>
              <form onSubmit={sendMessage}>

          
              <TextField
                onChange={(e) => setChatInput(e.target.value)}
                value={chatInput}
                sx={{ width: "80%" }}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
              <Box>
                <Button type="submit">Send</Button>
                <Button>Upload File</Button>
              </Box>
              </form>
            </Card>
          </Box>
    )
}

export default ChatField
