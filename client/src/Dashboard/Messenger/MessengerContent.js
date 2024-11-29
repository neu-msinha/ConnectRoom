import React, { useEffect } from 'react';
import { styled } from '@mui/system';
// import Messages from './Messages/Messages';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
// import NewMessageInput from './NewMessageInput'

const Wrapper = styled('div')({
    flexGrow: 1
});

const MessengerContent = ({chosenChatDetails}) => {
    useEffect(() => {

    }, [chosenChatDetails]);
    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    );
};

export default MessengerContent;