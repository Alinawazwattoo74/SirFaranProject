# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy backend.js to the container
COPY backend.js .

# Expose port 5000 for the backend service
EXPOSE 5000

# Run backend.js when the container launches
CMD ["node", "backend.js"]
