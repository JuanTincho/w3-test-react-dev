module.exports = function(app) {
    app.dataSources.db.automigrate('person', function(err) {
      if (err) throw err;
  
      app.models.person.create([{
        firstname: 'Jose',
        lastname: 'Perez',
        email: 'jose.perez@gmail.com',
        birthdate: '2000-04-27',
        country: 'Argentina',
        phone: '1155557777'
      },
      {
        firstname: 'Juan',
        lastname: 'Garcia',
        email: 'juan.garcia@gmail.com',
        birthdate: '1990-04-27',
        country: 'Argentina',
        phone: '1155557777'
      }], function(err, person) {
        if (err) throw err;
  
        console.log('Models created: \n', person);
      });
    });
  };