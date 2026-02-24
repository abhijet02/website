FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN mkdir -p .next/standalone/.next \
  && cp -r .next/static .next/standalone/.next/static \
  && cp -r public .next/standalone/public
EXPOSE 3000
WORKDIR /app/.next/standalone
CMD ["node", "server.js"]
