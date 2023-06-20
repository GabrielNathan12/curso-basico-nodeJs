import 'dotenv/config'
import {CreateProducts1687197983796} from './migrations/1687197983796-CreateProducts';
import { DataSource } from 'typeorm';
import Product from '@modules/products/typeorm/entities/Product';

export const connection = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'welcome1',
    database: 'apivendas',
    migrations: [CreateProducts1687197983796],
    entities: [Product]
});


