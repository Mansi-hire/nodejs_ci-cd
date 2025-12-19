# 1️⃣ Base image (Node.js installed)
FROM node:18

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy package.json first
COPY package.json .

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy all project files
COPY . .

# 6️⃣ Expose app port
EXPOSE 3000

# 7️⃣ Start the application
CMD ["npm", "start"]
