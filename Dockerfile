FROM node:6-alpine
RUN yarn add mobile-detect
ADD index.js package.json /opt/app/
VOLUME /opt/app/config/
EXPOSE 8080
CMD [ "node", "/opt/app/index.js" ]
