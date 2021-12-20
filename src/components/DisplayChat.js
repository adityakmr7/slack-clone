import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";

function DisplayChat({ roomDetail, messages }) {
  
  return (
    <Box>
      <Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography># {roomDetail?.name}</Typography>
         
        </Box>
        <Divider />
        <Box height={"100%"} overflowY="scroll">
          {messages?.map(({ message, timestamp, userimage, user }) => {
            return (
              <Box marginY={2} display={"flex"} flexDirection={"row"}>
                <Box marginX={1}>
                  <Avatar src={userimage} />
                </Box>
                <Box>
                  <Typography variant="body1">{user}</Typography>
                  <Typography variant="body2">{message}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default DisplayChat;
