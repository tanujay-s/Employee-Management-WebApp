const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

//create employee
router.post('/',employeeController.createEmployee);

//show employee list
router.get('/',employeeController.showEmployeeList);

//show specific employee
router.get('/:id',employeeController.getEmployeeById);

//update employee list
router.put('/:id',employeeController.updateEmployee);

//delete employee from database
router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;