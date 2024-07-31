// 1. Find the names of employees who work in the "Finance" department and have made sales on or after "2023-09-16".
db.employees.aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "department_id",
        foreignField: "_id",
        as: "department"
      }
    },
    { $unwind: "$department" },
    { $match: { "department.name": "Finance" } },
    {
      $lookup: {
        from: "sales",
        localField: "_id",
        foreignField: "employee_id",
        as: "sales"
      }
    },
    { $unwind: "$sales" },
    { $match: { "sales.sale_date": { $gte: new Date("2023-09-16") } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 2. Find the total sales count and total sales amount for each employee who has made a sale, and sort the results by total sales amount in descending order.
  db.sales.aggregate([
    {
      $group: {
        _id: "$employee_id",
        totalSalesCount: { $sum: 1 },
        totalSalesAmount: { $sum: "$amount" }
      }
    },
    {
      $sort: { totalSalesAmount: -1 }
    }
  ]);
  
  // 3. Retrieve a list of departments with more than 10 employees.
  db.employees.aggregate([
    {
      $group: {
        _id: "$department_id",
        employeeCount: { $sum: 1 }
      }
    },
    { $match: { employeeCount: { $gt: 10 } } },
    {
      $lookup: {
        from: "departments",
        localField: "_id",
        foreignField: "_id",
        as: "department"
      }
    },
    { $unwind: "$department" },
    { $project: { "department.name": 1, _id: 0 } }
  ]);
  
  // 4. Find the employees who have worked in the company for more than 5 years.
  db.employees.aggregate([
    {
      $addFields: {
        yearsWorked: {
          $divide: [
            { $subtract: [new Date(), "$hire_date"] },
            1000 * 60 * 60 * 24 * 365
          ]
        }
      }
    },
    { $match: { yearsWorked: { $gt: 5 } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 5. Find the employee with the highest salary.
  db.employees.find().sort({ salary: -1 }).limit(1).project({ name: 1, salary: 1, _id: 0 });
  
  // 6. List the names and ages of employees in the "HR" department.
  db.employees.aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "department_id",
        foreignField: "_id",
        as: "department"
      }
    },
    { $unwind: "$department" },
    { $match: { "department.name": "HR" } },
    { $project: { name: 1, age: 1, _id: 0 } }
  ]);
  
  // 7. Retrieve the names of employees who have worked on the "Employee Management System" project.
  db.employees.aggregate([
    {
      $lookup: {
        from: "projects",
        localField: "projects",
        foreignField: "_id",
        as: "projectDetails"
      }
    },
    { $unwind: "$projectDetails" },
    { $match: { "projectDetails.name": "Employee Management System" } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 8. Find the employees who have not made any sales.
  db.employees.aggregate([
    {
      $lookup: {
        from: "sales",
        localField: "_id",
        foreignField: "employee_id",
        as: "sales"
      }
    },
    { $match: { "sales.0": { $exists: false } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 9. List the names of employees who have made a sale in September 2023.
  db.sales.aggregate([
    {
      $match: {
        sale_date: { $gte: new Date("2023-09-01"), $lt: new Date("2023-10-01") }
      }
    },
    {
      $lookup: {
        from: "employees",
        localField: "employee_id",
        foreignField: "_id",
        as: "employee"
      }
    },
    { $unwind: "$employee" },
    { $project: { "employee.name": 1, _id: 0 } }
  ]);
  
  // 10. Find the departments where the average employee age is greater than 35.
  db.employees.aggregate([
    {
      $group: {
        _id: "$department_id",
        averageAge: { $avg: "$age" }
      }
    },
    { $match: { averageAge: { $gt: 35 } } },
    {
      $lookup: {
        from: "departments",
        localField: "_id",
        foreignField: "_id",
        as: "department"
      }
    },
    { $unwind: "$department" },
    { $project: { "department.name": 1, _id: 0 } }
  ]);
  
  // 11. Find the employees who have worked on at least three different projects.
  db.employees.aggregate([
    { $match: { $expr: { $gte: [{ $size: "$projects" }, 3] } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 12. List the names of employees who have not been assigned to any project.
  db.employees.aggregate([
    { $match: { projects: { $eq: [] } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 13. Find the employees who have worked on projects from multiple departments.
  db.employees.aggregate([
    {
      $lookup: {
        from: "projects",
        localField: "projects",
        foreignField: "_id",
        as: "projectDetails"
      }
    },
    {
      $group: {
        _id: "$_id",
        uniqueDepartments: { $addToSet: "$projectDetails.department" }
      }
    },
    { $match: { $expr: { $gte: [{ $size: "$uniqueDepartments" }, 2] } } },
    {
      $lookup: {
        from: "employees",
        localField: "_id",
        foreignField: "_id",
        as: "employee"
      }
    },
    { $unwind: "$employee" },
    { $project: { "employee.name": 1, _id: 0 } }
  ]);
  
  // 14. Find the employees who have the highest sales amount in a single sale.
  db.sales.aggregate([
    {
      $group: {
        _id: "$employee_id",
        maxSaleAmount: { $max: "$amount" }
      }
    },
    {
      $sort: { maxSaleAmount: -1 }
    },
    { $limit: 1 },
    {
      $lookup: {
        from: "employees",
        localField: "_id",
        foreignField: "_id",
        as: "employee"
      }
    },
    { $unwind: "$employee" },
    { $project: { "employee.name": 1, maxSaleAmount: 1, _id: 0 } }
  ]);
  
  // 15. Retrieve the names of employees who have not made a sale in the last 90 days.
  db.sales.aggregate([
    {
      $match: {
        sale_date: { $lt: new Date(new Date().setDate(new Date().getDate() - 90)) }
      }
    },
    {
      $lookup: {
        from: "employees",
        localField: "employee_id",
        foreignField: "_id",
        as: "employee"
      }
    },
    { $unwind: "$employee" },
    { $project: { "employee.name": 1, _id: 0 } }
  ]);
  
  // 16. Find the departments where the total employee salaries exceed $500,000.
  db.employees.aggregate([
    {
      $group: {
        _id: "$department_id",
        totalSalaries: { $sum: "$salary" }
      }
    },
    { $match: { totalSalaries: { $gt: 500000 } } },
    {
      $lookup: {
        from: "departments",
        localField: "_id",
        foreignField: "_id",
        as: "department"
      }
    },
    { $unwind: "$department" },
    { $project: { "department.name": 1, totalSalaries: 1, _id: 0 } }
  ]);
  
  // 17. List the employees who have worked on the "Payroll Software" project and are older than 35.
  db.employees.aggregate([
    {
      $lookup: {
        from: "projects",
        localField: "projects",
        foreignField: "_id",
        as: "projectDetails"
      }
    },
    { $unwind: "$projectDetails" },
    { $match: { "projectDetails.name": "Payroll Software", age: { $gt: 35 } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 18. Find the employees who have been with the company for at least 10 years.
  db.employees.aggregate([
    {
      $addFields: {
        yearsWithCompany: {
          $divide: [
            { $subtract: [new Date(), "$hire_date"] },
            1000 * 60 * 60 * 24 * 365
          ]
        }
      }
    },
    { $match: { yearsWithCompany: { $gte: 10 } } },
    { $project: { name: 1, _id: 0 } }
  ]);
  
  // 19. Find the names of employees who have made a sale of more than $10,000.
  db.sales.aggregate([
    { $match: { amount: { $gt: 10000 } } },
    {
      $lookup: {
        from: "employees",
        localField: "employee_id",
        foreignField: "_id",
        as: "employee"
      }
    },
    { $unwind: "$employee" },
    { $project: { "employee.name": 1, _id: 0 } }
  ]);
  
  // 20. Retrieve the names of employees who have not been assigned to a project in the last year.
  db.employees.aggregate([
    {
      $lookup: {
        from: "projects",
        localField: "projects",
        foreignField: "_id",
        as: "projectDetails"
      }
    },
    { $unwind: "$projectDetails" },
    {
      $match: {
        "projectDetails.end_date": {
          $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        }
      }
    },
    { $project: { name: 1, _id: 0 } }
  ]);
  