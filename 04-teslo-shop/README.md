<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Setup in development enviroment

1. Clone repo
2. Exec
```
npm install
```
3. Instal nest CLI
```
npm i -g @nestjs/cli
```

4. Setup database
```
docker-compose up -d
```

5. Change environment variables in .env file
   
6. Exec the app in dev mode 
```
npm run start:dev
```

7. Exec seed request
```
{{LOCAL_ROUTE}}/api/seed
```