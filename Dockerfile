FROM node:lts as development

RUN mkdir -p /home/trarepo-api && chown node:node /home/trarepo-api

USER node

WORKDIR /home/trarepo-api

COPY . /home/trarepo-api

ENV NODE_ENV=development

RUN npm install

FROM development as builder

RUN npm run build

FROM node:lts-alpine as production

WORKDIR /home/trarepo-api

COPY --from=builder /home/trarepo-api/package*.json /home/trarepo-api/

COPY --from=builder /home/trarepo-api/dist /home/trarepo-api/dist

ENV NODE_ENV=production

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]