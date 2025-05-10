import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
      id: nanoid(),
      sender: 'Alice',
      receiver: 'Bob',
      message: 'Hey Bob!',
      timestamp: new Date().toLocaleString(),
      status: 'unread',
    },
    {
      id: nanoid(),
      sender: 'Bob',
      receiver: 'Alice',
      message: 'Hey Alice, how are you?',
      timestamp: new Date().toLocaleString(),
      status: 'read',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: {
      reducer(state, action) {
        state.messages.push(action.payload);
      },
      prepare(sender, receiver, message) {
        return {
          payload: {
            id: nanoid(),
            sender,
            receiver,
            message,
            timestamp: new Date().toLocaleString(),
            status: 'unread',
          },
        };
      },
    },
    deleteMessage(state, action) {
      state.messages = state.messages.filter(msg => msg.id !== action.payload);
    },
    editMessage(state, action) {
      const { id, newText } = action.payload;
      const msg = state.messages.find(m => m.id === id);
      if (msg) {
        msg.message = newText;
        msg.timestamp = new Date().toLocaleString();
      }
    },
    markAsRead(state, action) {
      const id = action.payload;
      const msg = state.messages.find(m => m.id === id);
      if (msg) {
        msg.status = 'read';
      }
    },
    markAsUnread(state, action) {
      const id = action.payload;
      const msg = state.messages.find(m => m.id === id);
      if (msg) {
        msg.status = 'unread';
      }
    },
  },
});

export const {
  sendMessage,
  deleteMessage,
  editMessage,
  markAsRead,
  markAsUnread,
} = chatSlice.actions;

export default chatSlice.reducer;