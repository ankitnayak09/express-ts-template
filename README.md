# Express TypeScript Template

A production-ready Express.js template with TypeScript, featuring robust security, logging, and error handling.

## 🚀 Features

- TypeScript Support
- Security Features
    - Helmet for HTTP headers
    - CORS configuration
    - Rate limiting
    - Request size limiting
- Error Handling
    - Global error handling middleware
    - Custom error classes
    - Structured error responses
- Logging
    - Winston logger
    - Request logging
    - Error logging
- API Documentation
    - Swagger UI
- Health Check Endpoint
- Graceful Shutdown

## 📋 Prerequisites

Node.js (v22 or higher)

## 🛠️ Installation

```shell
# Clone the repository
git clone https://github.com/yourusername/express-ts-template.git

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

## 🚦 Getting Started

```shell
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Run tests
npm test
```

## 🔒 Environment Variables

Create a .env file in the root directory:

```shell
NODE_ENV=development
PORT=3000
```

## 📁 Project Structure

![alt text](<Screenshot 2025-06-13 at 5.56.37 PM.png>)

## 🛡️ Security Features

- **Helmet**: HTTP header security
- **CORS**: Configurable Cross-Origin Resource Sharing
- **Rate Limiting**:
    - API: 100 requests per 15 minutes
    - Auth: 5 attempts per hour

## 🔍 API Documentation

Access the Swagger documentation at:

```
http:localhost:3000/api-docs
```

## 🧪 Testing

```shell
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
