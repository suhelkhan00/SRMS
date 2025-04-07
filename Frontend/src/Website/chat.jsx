import React, { useState } from 'react';

import axios from 'axios';

// Personal Assistant Component
const PersonalAssistant = () => {
  const [messages, setMessages] = useState([
    { user: 'System', text: 'Hello, I am your personal assistant! Ask me anything.' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle sending message
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userMessage = newMessage;
      setMessages([...messages, { user: 'User', text: userMessage }]);
      setNewMessage('');
      setLoading(true);

      let responseMessage = '';

      // Check if it's a weather query
      if (userMessage.toLowerCase().includes('weather')) {
        const location = userMessage.split('weather in ')[1];
        if (location) {
          const weatherResponse = await getWeather(location);
          responseMessage = weatherResponse;
        } else {
          responseMessage = 'Please specify the location for the weather.';
        }
      } else {
        // Get AI response for general questions
        const aiResponse = await getAIResponse(userMessage);
        responseMessage = aiResponse;
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Bot', text: responseMessage },
      ]);
      setLoading(false);
    }
  };

  // API call to OpenAI's GPT model for dynamic responses
  const getAIResponse = async (userMessage) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: userMessage,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      return 'Sorry, I could not fetch a response at the moment.';
    }
  };

  // API call to get the weather information
  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      );
      const { main, weather } = response.data;
      return `The weather in ${location} is ${weather[0].description} with a temperature of ${main.temp}°C.`;
    } catch (error) {
      console.error('Error fetching weather:', error);
      return 'Sorry, I could not fetch the weather for that location.';
    }
  };

  return (
    <div className="personal-assistant">
      <h2>Your Personal Assistant</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PersonalAssistant />
    </div>
  );
}

export default App;
