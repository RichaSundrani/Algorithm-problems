
/*
Second Highest Salary
Write a SQL query to get the second highest salary from the Employee table.
*/


// SELECT MAX(Salary) as SecondHighestSalary
// From Employee 
// WHERE Salary < ( SELECT Max(Salary) FROM Employee)