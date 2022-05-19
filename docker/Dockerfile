FROM cypress/included:9.1.0
WORKDIR /e2e
COPY cypress/ /e2e
COPY docker/entrypoint.sh cypress.json package.json tsconfig.json ./

RUN npm install
ENTRYPOINT [ "sh", "./entrypoint.sh" ]
