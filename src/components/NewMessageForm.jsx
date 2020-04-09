
import React, {useState} from 'react';

const NewMessageForm = ({onSend}) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value);
    };
    const handleClick = () => {
        onSend(inputText);
        setInputText('')
    }
  return (
    <div>
          <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />

      <button
        data-testid="sendButton"
        onClick={handleClick} 
        
      >
          Send

      </button>
    </div>
  );
};

export default NewMessageForm;