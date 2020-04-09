
import React, {useState} from 'react';

const NewMessageForm = () => {
  return (
    <div>
          <input
        type="text"
        data-testid="messageText"
      />

      <button
        data-testid="sendButton"
        onClick
      >
          Send

      </button>
    </div>
  );
};

export default NewMessageForm;