const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

// Security middleware - Configure CSP to allow axios CDN
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdnjs.cloudflare.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'"]
    }
  }
}))
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:8000'
}))

// Parse JSON bodies
app.use(express.json())

// Serve static files (CSS, JS, etc.)
app.use(express.static(__dirname))

// ChatGPT API endpoint
app.post('/api/chat', async (req, res) => {
  console.log('🔥 API call received:', req.body);
  try {
    const { message } = req.body
    
    if (!message || typeof message !== 'string') {
      console.log('❌ Invalid message format');
      return res.status(400).json({ error: 'Message is required and must be a string' })
    }

    console.log('📤 Sending to OpenAI...');
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 1,
      max_tokens: 1500,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    console.log('✅ OpenAI response received');
    const aiResponse = response.data.choices[0].message.content
    console.log('📤 Sending response back to client');
    res.json({ response: aiResponse })

  } catch (error) {
    console.error('❌ OpenAI API Error:', error.response?.data || error.message)
    
    if (error.response?.status === 401) {
      res.status(500).json({ error: 'Invalid API key' })
    } else if (error.response?.status === 429) {
      res.status(429).json({ error: 'Rate limit exceeded, please try again later' })
    } else {
      res.status(500).json({ error: 'Something went wrong with the AI service' })
    }
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`🚀 App is listening at port: http://localhost:${port}`)
})
