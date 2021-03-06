const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');

User.hasMany(Project, {
  // foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  // foreignKey: 'user_id'
});
Project.hasMany(Comment, {
  // foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Project, {
  // foreignKey: 'project_id'
});

Project.belongsTo(User, {
  // foreignKey: 'user_id'
});
User.hasMany(Comment, {
  // foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  // foreignKey: 'project_id'
});

// Comment.belongsToMany(Project,{
//   through:{
//     model:ProductTag,
//     unique: false, 
//   }
// });



module.exports = { User, Project, Comment };
