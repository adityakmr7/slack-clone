import {
  Box,
  Divider,
  Drawer,
  Fade,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Edit } from "@mui/icons-material";
import db from "../config/firebase";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function SideBar() {
  const [isChannel, setIsChannel] = useState(false);
  const [channelList, setChannelList] = useState([]);
  const navigate = useNavigate();
  const handleChannelList = () => {
    setIsChannel((prev) => !prev);
  };
  const handleAddChannel = () => {
    const channelName = prompt("Please enter the channel aName");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  useEffect(() => {
    handleChannel();
  }, []);
  const handleChannel = async () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannelList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  };

  const handleChannelDetail = (id) => {
    navigate(`/room/${id}`);
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        backgroundColor: "#3f0f40",
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflow: "auto",
          backgroundColor: "#3f0f40",
          color: "#fff",
        }}
      >
        <Divider sx={{ borderColor: "#fff" }} />
        <Box
          marginX={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>Civo Community</Typography>
          <IconButton>
            <Edit />
          </IconButton>
        </Box>
        <Divider />
        <Box marginY={2} marginX={2}>
          <Typography variant="body1"> Get Started</Typography>
          <Typography variant="body2">Next:Add a profile photo</Typography>
        </Box>
        <Box
          marginY={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <ConnectingAirportsIcon />
          <Typography>Slack Connect</Typography>
        </Box>
        <Box
          marginY={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <MoreVertIcon />
          <Typography>Browse Slack</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          marginY={1}
        >
          <IconButton onClick={handleChannelList}>
            <KeyboardArrowDownIcon color="white" />
          </IconButton>
          <Typography>Channels</Typography>
        </Box>
        <Fade in={isChannel}>
          <Box marginLeft={1}>
            {channelList.map((item, i) => {
              return (
                <Box
                  paddingY={1}
                  width={"60%"}
                  margin="auto"
                  key={item.id}
                  onClick={() => handleChannelDetail(item.id)}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography>#</Typography>
                  <Typography>{item.name}</Typography>
                </Box>
              );
            })}

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <IconButton onClick={handleAddChannel}>+</IconButton>
              <Typography>Add Channels</Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Drawer>
  );
}

export default SideBar;
