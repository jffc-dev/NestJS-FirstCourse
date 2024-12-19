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

5. In order to populate databse with the seed, make a get request to this route
```
{{LOCAL_ROUTE}}/api/v2/seed
```