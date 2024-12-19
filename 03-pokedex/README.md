<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
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

## Stack
* MongoDB
* Nest
  
5. Clone file __.env.template__ and rename the copy to __.env__

6. Fill the environment variables in the __.env__ file
   
7. Exec the app in dev environment
```
npm run start:dev
```

8. In order to populate databse with the seed, make a get request to this route
```
{{LOCAL_ROUTE}}/api/v2/seed
```