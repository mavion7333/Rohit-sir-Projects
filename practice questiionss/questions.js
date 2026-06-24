// Q11. You are given a list of words. Group them into anagram families.
// let Input =  ["eat", "tea", "tan", "ate", "nat", "bat"];

// function groupAnagrams(words) {
//     let groups = {};
//     for (let word of words) {
//         let key = word.split("").sort().join("");
//         if (!groups[key]) {
//             groups[key] = [];
//         }
//         groups[key].push(word);
//     }
//     return Object.values(groups);
// }
// console.log(groupAnagrams(input)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// let Input = ["abc", "car", "arc", "dog", "god", "bca"];

// function matchingWords(words) {
//     let output = {};

//     for (let word of words) {
//         let key = word.split("").sort().join("");
//         if (!output[key]) {
//             output[key] = [];
//         }
//         output[key].push(word);
//     }
//     return Object.values(output);
// }
// console.log(matchingWords(Input)); // Output: [["abc", "bca"], ["car", "arc"], ["dog", "god"]]


// let Input = ["a", "b", "a"];
// function mixA(words) {
//     let output = {}
//     for (let word of words) {
//         let key = word.split("").sort().join("");
//         if (!output[key]) {
//             output[key] = [];
//         }
//         output[key].push(word);
//     }
//     return Object.values(output);
// }
// console.log(mixA(Input));

// // Output: [["a", "a"], ["b"]]

// // Q12. You are given a string. Find the longest substring without repeating characters.
// // Input : "abcabcbb"
// // Output: "abc" (length 3)
// // Input : "pwwkew"
// // Output: "wke" (length 3)
// // Input : "aaaa"
// // Output: "a" (length 1)
// // Input : ""
// // Output: "" (length 0)
// function longestSubstring(str) {
//     let longest = "";

//     for (let i = 0; i < str.length; i++) {
//         let current = "";
//         for (let j = i; j < str.length; j++) {
//             if (current.includes(str[j])) {
//                 break;
//             }
//             current += str[j];
//             if (current.length > longest.length) {
//                 longest = current;
//             }
//         }
//     }
//     return {
//         substring: longest,
//         length: longest.length
//     };
// }

// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("pwwkew"));
// console.log(longestSubstring("aaaa"));
// console.log(longestSubstring(""));
// // Q13. You are given a list of integers. Find the longest consecutive sequence.
// // Input : [100, 4, 200, 1, 3, 2]
// // Output: 4 (sequence: 1,2,3,4)
// // Input : [0, -1, 1, 2]
// // Output: 4 (sequence: -1,0,1,2)
// // Input : [5]
// // Output: 1
// // Input : [0, -1, 1, 2]
// // Output: 4 (sequence: -1,0,1,2)
// // Input : [1, 1, 1, 1]
// // Output: 1 (duplicates don't extend sequence)
// function longestConsecutive(nums) {

//     if (nums.length === 0) {
//         return 0;
//     }
//     nums.sort((a, b) => a - b);

//     let longest = 1;
//     let count = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             continue; // skip duplicates
//         }
//         if (nums[i] === nums[i - 1] + 1) {
//             count++;
//         } else {
//             count = 1;
//         }
//         if (count > longest) {
//             longest = count;
//         }
//     }
//     return longest;
// }

// // 1,2,3,4,100,200

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, -1, 1, 2])); // 4
// console.log(longestConsecutive([5])); // 1
// console.log(longestConsecutive([1, 1, 1, 1])); // 1


// // Q14. You are given a paragraph. Find the longest palindromic substring in it (ignore spaces and punctuation).
// // Input : "never odd or even"
// // Output: "neveroddoreven"
// // Input : "racecar is a word"
// // Output: "racecar"
// // Input : "abcd"
// // Output: any single character (no palindrome longer than 1)
// // Input : "a"
// // Output: "a"
// function longestPalindrome(str) {

//     let longest = "";
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let sub = str.slice(i, j + 1);
//             let reversed = sub.split("").reverse().join("");
//             if (sub === reversed && sub.length > longest.length) {
//                 longest = sub;
//             }
//         }
//     }
//     return longest;
// }

// console.log(longestPalindrome("racecar")); // racecar
// console.log(longestPalindrome("abcd"));    // a
// console.log(longestPalindrome("a"));       // a

// // Q15. You are given two arrays. Without using any built-in set functions, find their intersection — elements that appear in both, without duplicates.
// // Input : [1, 3, 5, 7, 3, 9] and [3, 5, 5, 8, 9]
// // Output: [3, 5, 9]
// // Input : [1, 2, 2, 3] and [2, 2, 3, 4]
// // Output: [2, 3]
// // Input : [1, 2, 3] and [4, 5, 6]
// // Output: []
// // Input : [] and [1, 2, 3]
// // Output: []

// function setFunctions(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (
//             arr2.includes(arr1[i]) &&
//             !result.includes(arr1[i])
//         ) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// }

// console.log(setFunctions([1, 3, 5, 7, 3, 9], [3, 5, 5, 8, 9]));
// // [3, 5, 9]
// console.log(setFunctions([1, 2, 2, 3], [2, 2, 3, 4]));
// // [2, 3]
// console.log(setFunctions([1, 2, 3], [4, 5, 6]));
// // []
// console.log(setFunctions([], [1, 2, 3]));
// // []



// Q4. You are given a dictionary of employees where each key is an employee ID and value is an object with name, department, and salary. Group employees by department and find the highest paid in each department.

// const employees = {
//     101: { name: "Sameer", department: "Accounts", salary: 50000 },
//     102: { name: 'Vivek', department: ' Accounts', salary: 60000 },
//     103: { name: 'Nikhil', department: "IT", salary: 65000 },
//     104: { name: 'Aswin', department: 'IT', salary: 70000 },
//     105: { name: 'Jatin', department: "Operations", salary: 90000 },
//     106: { name: 'Rahul', department: "Operations", salary: 100000 }
// };

// // console.log(employees.name{ sameer });

// function highestPaid(employees) {
//     let highPaid = {};
//     let stored = {};

//     for (let id in employees) {
//         let employee = employees[id];
//         let dept = employee.department;

//         if (!stored[dept]) {
//             stored[dept] = [];
//         }
//         stored[dept].push(employee);

//         if (!highPaid[dept] || employee.salary > highPaid[dept].salary) {
//             highPaid[dept] = employee;
//         }
//     }
//     return {
//         stored,
//         highPaid
//     };
// }
// function getDepartment(name) {
//     for (let id in employees) {
//         console.log(id);

//         if (employees[id].name === name) {
//             return employees[id].department;
//         }
//     }
// }

// console.log(getDepartment("Rahul"));

// let result = highestPaid(employees);

// console.log(result.stored);
// console.log(employees.department);


///////////////////////////////////////////////////////////////////////////////////////////////

// // Q3. You are given a list of student objects, each having name, age, and grades (list of numbers). Find the student with the highest average grade. If tie, return the younger one.

// let students = {
//     Sameer: { age: 20, grade: [80, 65, 90] },
//     Jatin: { age: 21, grade: [60, 65, 75] },
//     Vivek: { age: 23, grade: [62, 66, 85] },
//     Akshat: { age: 24, grade: [58, 60, 89] },
//     Dheeraj: { age: 22, grade: [90, 99, 95] }
// }
// function higestAvg() {
//     let highestMark = {};
//     let highestGradeYounger = {};

//     for (let id in students) {
//         let student = students[id];
//         let grade = student.grade;

//         if (!student[grade]) {
//             student[grade] = []
//         }
//         highestMark[grade].push(student);

//         if (!higestAvg[grade] || student.grade > highestMark[grade]) {
//             highestMark[grade] = student
//         }
//         return {
//             grade,
//             highestMark
//         } //// wrong ans 
//     }

//     console.log(higestAvg(80))
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// // Q5. You are given a list of order objects, each having order_id, customer, items (list of tuples (product, qty, price)), and status. Calculate total revenue from only "delivered" orders, and find the customer who spent the most.


// const listOfObjects = [
//     {
//         order_id: new Date().getTime(),
//         coustomer_name: "sameer",
//         items: [
//             {
//                 Item: "laptop",
//                 Quantity: 1,
//                 Price: 60000
//             },
//             {
//                 Item: 'mouse',
//                 Quantity: 3,
//                 Price: 500
//             }
//         ],
//         status: "Delivered"

//     },

//     {
//         order_id: new Date().getTime(),
//         coustomer_name: "Jassi",
//         items: [
//             {
//                 Item: "T.V.",
//                 Quantity: 1,
//                 Price: 66000
//             },

//             {
//                 item: "Remote",
//                 Quantity: 1,
//                 Price: 300
//             }
//         ],
//         status: "Pending"
//     },

//     {
//         order_id: new Date().getTime(),
//         coustomer_name: "Akshat",
//         items: [
//             {
//                 Item: "XBOX",
//                 Quantity: 1,
//                 Price: 60000
//             },

//             {
//                 Item: 'controller',
//                 Quantity: 3,
//                 Price: 2500
//             }
//         ],
//         status: "Delivered"
//     },

//     {
//         order_id: new Date().getTime(),
//         coustomer_name: "Ritesh",
//         items: [
//             {
//                 Item: "Gold Chain",
//                 Quantity: 2,
//                 Price: 600000
//             },

//             {
//                 Item: 'Gold Braclet',
//                 Quantity: 3,
//                 Price: 222500
//             }
//         ],
//         status: "Delivered"
//     }
// ]

// function orderSummary(orders) {

//     let totalRevenue = 0;
//     let customerSpent = {};

//     for (let order of orders) {

//         if (order.status === "Delivered") {
//             let orderTotal = 0;

//             for (let item of order.items) {
//                 orderTotal += item.Quantity * item.Price;
//             }

//             totalRevenue += orderTotal;

//             if (!customerSpent[order.coustomer_name]) {
//                 customerSpent[order.coustomer_name] = 0;
//             }
//             customerSpent[order.coustomer_name] += orderTotal;
//         }
//     }
//     let highestCustomer = "";
//     let highestSpent = 0;

//     for (let customer in customerSpent) {
//         if (customerSpent[customer] > highestSpent) {
//             highestSpent = customerSpent[customer];
//             highestCustomer = customer;
//         }
//     }

//     console.log("Total Revenue:", totalRevenue);
//     console.log("Highest Spending Customer:", highestCustomer);
//     console.log("Amount Spent:", highestSpent);
// }

// orderSummary(listOfObjects);


/////////////////////////////////////////////////////////////////////////////////////////////////

// Q6. You are given a nested dictionary representing a company org chart — each employee has a name, role, and reports (list of employee objects under them). Write a function to print the full hierarchy with indentation, and count total employees under any given manager (at all levels).

const dictionary = {
    101: {
        Name: 'Hitesh Sharma',
        Role: 'CEO',
        Report: [
            {
                Name: "Ridam",
                Role: "CTO",
                Report: [
                    {Name: "Sameer",
                        Role: "Developer",
                        Report: 
                    }
                ]
            }
        ]
    }
}