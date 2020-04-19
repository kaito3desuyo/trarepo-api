import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [join(__dirname, '..', '..', 'libs', '**', '*.model.{ts,js}')],
    migrations: [
        join(
            __dirname,
            '..',
            '..',
            '..',
            'db',
            'migrations',
            '**',
            '*.{ts,js}',
        ),
    ],
    cli: {
        migrationsDir: join('db', 'migrations'),
    },
};

export = ORM_CONFIG;
