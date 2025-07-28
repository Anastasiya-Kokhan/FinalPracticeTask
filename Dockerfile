# Use Playwright's official base image with all browsers preinstalled
FROM mcr.microsoft.com/playwright:v1.54.1-jammy

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Run tests (headless by default)
CMD ["npx", "playwright", "test"]
