import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';

export const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        ...config,
        logging: false
    }
);