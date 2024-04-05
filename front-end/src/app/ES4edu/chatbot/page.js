
"use client"
import React from 'react';
import { FacebookProvider, MessageUs } from 'react-facebook';

const FacebookChat = ({ appId }) => {
  return (
    <FacebookProvider appId={appId}>
      <MessageUs messengerAppId={appId} pageId="https://www.facebook.com/profile.php?id=100087388012113&mibextid=LQQJ4d" />
    </FacebookProvider>
  );
};

export default FacebookChat;
