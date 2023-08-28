# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY Backend/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy backend.js and frontend.js to the container
COPY Backend/backend.js .
COPY Frontend/frontend.js .

# Expose ports for both backend and frontend services
EXPOSE 5000 8000

# Run both backend.js and frontend.js when the container launches
CMD ["node", "backend.js"]
