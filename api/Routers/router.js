const express = require('express');
const  createDatabase  = require('../Controllers/createDateDb.js');
const deleteData = require('../Controllers/deleteDateDb.js');
const  getAllDataBase  = require('../Controllers/getAllDb.js');
const getIdDataBase = require('../Controllers/getIdDb.js');
const updateData = require('../Controllers/updateDateDb.js');

const rut = express()

rut.get('/',getAllDataBase);
rut.post('/',createDatabase);
rut.get('/:id',getIdDataBase);
rut.put('/:id',updateData);
rut.delete('/:id',deleteData);



module.exports = rut;