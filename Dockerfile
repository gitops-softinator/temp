# Create a temp container
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json in to the container directory
COPY package.json .

# Install dependencies into the container
RUN npm install

# Copy the code files
COPY . .

# Expose the frontend port
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
