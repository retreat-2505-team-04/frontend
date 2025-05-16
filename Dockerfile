# Use an official Node.js image as the build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application source
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the production build
FROM nginx:stable-alpine as production

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config if you have one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

