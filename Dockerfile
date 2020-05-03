FROM node:lts as development

RUN apt update -y && apt install postgresql-common -y && yes | sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh && apt install postgresql-client-12 -y

RUN mkdir -p /home/trarepo-api && chown node:node /home/trarepo-api

USER node

ENV NODE_ENV=development

WORKDIR /home/trarepo-api

COPY . /home/trarepo-api

RUN npm install



FROM development as builder

RUN npm run build



FROM node:lts-alpine as production

ENV NODE_ENV=production

WORKDIR /home/trarepo-api

COPY --from=builder /home/trarepo-api/package*.json /home/trarepo-api/

COPY --from=builder /home/trarepo-api/dist /home/trarepo-api/dist

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]