pragma solidity ^0.5.0;

contract Hrm {
    string public name;
    uint public employeeCount = 0;
    uint public departmentCount = 0;
    mapping(uint => Employee) public employees;
    mapping(uint => Department) public departments;



    struct Employee {

        uint id;
        string firstname;
        string lastname;
        string phonenumber;
        string location;
        string position;
        string department;
        address owner;
        bool isactive;
    }

    event EmployeeCreated(

        uint id,
        string firstname,
        string lastname,
        string phonenumber,
        string location,
        string position,
        string department,
        address owner,
        bool isactive
    );

    struct Department 
    {
        uint id;
        string department;
        address owner;
    }

    

    constructor() public {
        name = "HRM application";
    }

    //function to create employee

    function createEmployee(string memory _firstname,string memory _lastname,
    string memory _phonenumber,string memory _location,string memory _position,
    string memory _department) public {
        // Require a valid firstname
        require(bytes(_firstname).length > 0);
    // Require a valid lastname
        require(bytes(_lastname).length > 0);
        // Increment employee count
        employeeCount ++;
        // Create the employee
        employees[employeeCount] = Employee(employeeCount, _firstname,_lastname,_phonenumber,
        _location, _position, _department, msg.sender, true);
        // Trigger an event
        emit EmployeeCreated(employeeCount, _firstname,_lastname,_phonenumber,
        _location, _position, _department, msg.sender, true);
    }
    
}