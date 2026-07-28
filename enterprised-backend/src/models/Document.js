import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Document = sequelize.define('Document', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fileType: {
    type: DataTypes.ENUM('pdf', 'docx', 'txt', 'html', 'md', 'csv', 'json'),
    allowNull: false
  },
  fileSize: {
    type: DataTypes.INTEGER
  },
  content: {
    type: DataTypes.TEXT
  },
  embedding: {
    type: DataTypes.ARRAY(DataTypes.DOUBLE),
    allowNull: true
  },
  metadata: {
    type: DataTypes.JSONB,
    defaultValue: {}
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  workspaceId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  chunkCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'),
    defaultValue: 'pending'
  }
}, {
  timestamps: true,
  indexes: [
    { fields: ['userId'] },
    { fields: ['workspaceId'] },
    { fields: ['status'] },
    { fields: ['fileType'] }
  ]
});

export default Document;