/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  migrate: 'alter',

  /***************************************************************************************************************
   * A flag to toggle schemaless or schema mode in databases that support schemaless data structures.            *
   * If turned off, this will allow you to store arbitrary data in a record.                                     *
   * If turned on, only attributes defined in the model's attributes object will be stored.                      *
   * For adapters that don't require a schema, such as Mongo or Redis, the default setting is schema:false       *
   ***************************************************************************************************************/
  schema: true
};
