import { DataSource } from 'typeorm';


const connection = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 3000,
    username: 'postgres',
    password: 'docker',
    database: 'apivendas',
    migrations: ['./src/shared/typeorm/migrations/*.ts'],
    entities: []
});

