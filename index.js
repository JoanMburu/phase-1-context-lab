// Function to create an employee record
function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create employee records from an array of arrays
function createEmployeeRecords(employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
}

// Function to create a time-in event for an employee
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

// Function to create a time-out event for an employee
function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

// Function to calculate the hours worked by an employee on a specific date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate the wages earned by an employee on a specific date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// Function to calculate all wages earned by an employee
function allWagesFor() {
    const datesWorked = this.timeInEvents.map(event => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
}

// Function to find an employee by first name
function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
}

// Function to calculate the total payroll for all employees
function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
}