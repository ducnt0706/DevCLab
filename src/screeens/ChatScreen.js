import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import { firestore, database } from "../config/firebase";

const messagesRef = firestore.collection("messages");

const ChatScreen = ({route}) => {
  const [messages, setMessages] = useState([]);

  const {name}=route.params;
  const getMessage = () => {
    try {
      //console.log(messagesRef);
      messagesRef.onSnapshot((snapshot) => {
        const messageDatas = snapshot.docs.map((doc) => {
          const message = doc.data();
          return { ...message,createdAt:message.createdAt.toDate()};
        });
        // TO sort by created time
        // .sort((a,b)=>{
        //   b.createdAt.getTime()-a.createdAt.getTime()
        // });
        setMessages(messageDatas);
        //console.log(messageDatas);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getMessage();
  }, []);

  const onSend = useCallback(
    (messages) => {
      console.log(messages);
      setMessages((prev) => GiftedChat.append(prev, messages));
      let userInfo = {
        name: name,
        avatar: "https://static.ilike.com.vn/articles/thumb/s0/0/0/2/74420.jpg?v=1",
      };
      messagesRef.add({ ...messages[0], userInfo }).then(() => {
        console.log("Meeting Document successfully written!");
      });
    },
    [messages]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});

// const DEFAULT = [
//   {
//     _id: 1,
//     text: "Hello developer",
//     createdAt: new Date(),
//     user: {
//       _id: 2,
//       name: "React Native",
//       avatar: "https://placeimg.com/140/140/any",
//     },
//   },
// ];
