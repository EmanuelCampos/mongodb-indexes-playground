# Mongo Indexes playground
A easy way to examien your indexes and improve your database perfomance.

## Steps:

Run a docker locally:  
```bash
docker-compose up -d
```

Setup your env to localhost  

Seed your database (currently the amount is manually)  
```bash
yarn seed
```

Examine your query (currently the field, value and index is manually)  
```bash
yarn run:explain
```


## Next steps:
- [ ] Use arguments using CLI
- [ ] Add more options to create and test differentes queries