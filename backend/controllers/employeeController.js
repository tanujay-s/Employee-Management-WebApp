const Employee = require('../models/employeeSchema');
const generateUserId = require('../utils/generateUserIds');

//create employee
exports.createEmployee = async (req, res) =>{
    try{
        const {image, name, email, mobile, designation, gender, course} = req.body;
        const uniqueId = generateUserId();

        const emailValidate = await Employee.findOne({email});
        if(emailValidate){
            return res.status(404).json({message:'Employee with this email already exists'});
        }

        if (isNaN(mobile)) {
            return res.status(404).json({ message: 'Mobile number must be numeric' });
        }

        const newEmployee = new Employee({
            uniqueId,
            image,
            name,
            email,
            mobile,
            designation,
            gender,
            course
        });

        await newEmployee.save();
        res.status(200).json({message:'Employee created successfully'});

    } catch(error) {
        console.error('Error creating a new employee: ', error);
        res.status(500).json({message:'Internal server error', error});
    }
};

//show employee
exports.showEmployeeList = async (req, res) =>{
    try{
        const employeeList = await Employee.find();
        res.status(200).json(employeeList);
    } catch (error){
        console.error('Error fetching employee details: ', error);
        res.status(500).json({message:'Internal Server error'});
    }
};

//update employee 
exports.updateEmployee = async (req, res) => {
    try{
        const employeeDbId = req.params.id;
        const{image, name, email, mobile, designation, gender, course} = req.body;

        const employeeDetails = await Employee.findOne({_id:employeeDbId});
        if(!employeeDetails){
            return res.status(400).json({message:'No employee found'});
        }

        if(image) employeeDetails.image = image;
        if(name) employeeDetails.name = name;
        if(email) employeeDetails.email = email;
        if(mobile && !isNaN(mobile)) employeeDetails.mobile = mobile;
        if(designation) employeeDetails.designation = designation;
        if(gender) employeeDetails.gender = gender;
        if(course) employeeDetails.course = course;

        await employeeDetails.save();
        res.status(200).json({message:'Employee details updated successfully'});

    } catch(error) {
        console.error('error in updating employee details: ', error);
        res.status(500).json({message:'Internal server error'});
    }
};

//delete employee 
exports.deleteEmployee = async (req, res) =>{
    try{
        const employeeDbId = req.params.id;
        const employee = await Employee.findOneAndDelete({_id:employeeDbId});

        if(!employee){
            return res.status(400).json({message:'No employee found'});
        }
        res.status(200).json({message:'Employee details deleted successfully'})
    } catch(error) {
        console.error('Error: ', error);
        res.status(500).json({message:'Internal Server error'});
    }
};

//show specific employee based on id
exports.getEmployeeById = async (req, res) =>{
    try{
        const employeeID= req.params.id;
        const employeeList = await Employee.findOne({_id: employeeID});
        res.status(200).json(employeeList);
    } catch (error){
        console.error('Error fetching employee details: ', error);
        res.status(500).json({message:'Internal Server error'});
    }
};