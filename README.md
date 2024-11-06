# Setup NPM
- npm install
  
# Setup database
- Import backup dump database
  
# Setup back-end
- npm install express
- npm install -g nodemon
- npm install cors
- npm install body-parser
- npm install prisma
- npx prisma init
- npm install @prisma/client
- npm install jsonwebtoken
- npm install express-validator
- npm install bcryptjs

# Setup front-end
- npm create vite
- npm install axios
- npm install js-cookie
- npm install react-router-dom

# Setup .ENV
- node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
- copy generate result on JWT_SECRET=

# Run back-end express
- nodemon index.js

# Run front-end react
- npm run dev
