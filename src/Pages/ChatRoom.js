import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ChatField, DisplayChat } from '../components'
import db from '../config/firebase';
import { AppContainer } from '../containers'

function ChatRoom() {
    
    const {roomId} = useParams();
    console.log("roomId", roomId);
    const [roomMessages, setRoomMessages] = useState([]);
    const [roomDetail, setRoomDetail] = useState(null);
    useEffect(() => {
      updateChat();
    }, [roomId]);
    const updateChat = async () => {
      if (roomId) {
        db.collection("rooms")
          .doc(roomId)
          .onSnapshot((snapshot) =>
            setRoomDetail({ id: snapshot.id, name: snapshot.data().name })
          );
      }
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
      // const d = doc(db, "rooms", roomId);
    };
    return (
        <AppContainer>
            <DisplayChat roomDetail={roomDetail} messages={roomMessages} channelId={roomId}/>
            <ChatField channelId={roomId}/>     
        </AppContainer>
    )
}

export default ChatRoom