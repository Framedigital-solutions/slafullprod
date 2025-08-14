const allowedOrigins = [
  'http://localhost:3000',  // Default React dev server
  'http://127.0.0.1:3000',  // Alternative localhost
  'http://localhost:8000',  // Your backend server
  'https://srilaxmialankar.com',  // Your production domain
  'https://www.srilaxmialankar.com'  // WWW variant
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

module.exports = corsOptions;
