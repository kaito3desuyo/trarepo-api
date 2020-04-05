FROM node:lts as development

WORKDIR /trarepo-api
COPY ./ /trarepo-api

ENV NODE_ENV=development
RUN npm install


FROM node:lts-alpine

WORKDIR /trarepo-api
COPY --from=development /trarepo-api .

ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]