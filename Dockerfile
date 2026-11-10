FROM node:24-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json
COPY package.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy application source code
COPY server.js ./

# 6. Document application port
EXPOSE 3000

# 7. Start application
CMD ["npm", "start"]
