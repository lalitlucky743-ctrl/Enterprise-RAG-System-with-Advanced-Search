import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// In-memory database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected (in-memory)');
    await sequelize.sync({ alter: true });
    console.log('✅ Database synced');
  } catch (error) {
    console.warn('⚠️ Database error:', error.message);
  }
};

export default sequelize;