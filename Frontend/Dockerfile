# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy frontend.js to the container
COPY frontend.js .

# Expose port 8000 for the frontend service
EXPOSE 8000

# Run frontend.js when the container launches
CMD ["node", "frontend.js"]
