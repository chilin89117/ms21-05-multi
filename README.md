# [ms21-05]
## __A. Docker Network__

```
$ docker network create ms21-05-net
```

## __B. MongoDB Database__
* ### Use image from `https://hub.docker.com/_/mongo`
* ### Use network `ms21-05-net` for Node backend to connect
  * Does not need to expose `port 27017` because backend will connect using container name `mongodb`
* ### Use named volume `data` to persist database data
* ### Use environment variables to set username/password

```
$ docker container run -d --rm \
      --name mongodb \
      --network ms21-05-net \
      -v data:/data/db \
      -e MONGO_INITDB_ROOT_USERNAME=abbie \
      -e MONGO_INITDB_ROOT_PASSWORD=admin654321 \
      mongo:latest
```

## __C. Node.js Backend__

```
$ docker image build -t chilin89117/ms21-05-node ./backend
```
* ### Connect to MongoDB database `port 27017`
  * Use network `ms21-05-net` and container name `mongodb`
  * Use username/password set in `.env` file which overrides those set in `Dockerfile`
* ### Expose port 80 for React frontend where browser JavaScript can not access `ms21-05-net` network
* ### Use anonymous volume for `node_modules`
* ### Use named volume `nodelogs` for log files
* ### Use bind volume for source files

```
$ docker container run --rm -dp 80:80 \
      --name ms21-05-node \
      --network ms21-05-net \
      -v nodelogs:/app/logs \
      -v $PWD/backend:/app:ro \
      -v /app/node_modules \
      --env-file $PWD/backend/.env \
      chilin89117/ms21-05-node
```

## __D. React Frontend__

```
$ docker image build -t chilin89117/ms21-05-react ./frontend
```

* ### Does not need to be part of `ms21-05-net` network becasue React runs in browser and needs to access `localhost`
* ### React development server requires `-it`
* ### Use bind volume for source files

```
$ docker run --rm -it -dp 3000:3000 \
      --name ms21-05-react \
      -v $PWD/frontend/src:/app/src:ro \
      chilin89117/ms21-05-react
```
