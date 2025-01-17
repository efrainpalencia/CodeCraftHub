# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (if available) to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "src/index.js"]
