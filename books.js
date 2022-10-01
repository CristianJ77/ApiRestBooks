const Books = sequelize.define(

    "books",
  
    {
  
      name: {
  
        type: DataTypes.STRING,
  
        allowNull: false,
  
      },
  
      category: {
  
        type: DataTypes.STRING,
  
      },    
  
      author_name: {
  
        type: DataTypes.STRING,
  
      },
  
      author_nickname: {
  
        type: DataTypes.STRING,
  
      },
  
      author_nationality: {
  
        type: DataTypes.STRING,
  
      }
  
    },
  
    {
  
      timestamps: true,
  
    }
  
  );