console.log("your script is being initializing");
const students = [
    {
        name: "Saba Khan",
        marks: 88,
        class: "10th",
        address: "Mumbai, Maharashtra"
    },
    {
        name: "Riya Sharma",
        marks: 85,
        class: "10th",
        address: "Pune, Maharashtra"
    },
    {
        name: "Rohan Patel",
        marks: 70,
        class: "12th",
        address: "Ahmedabad, Gujarat"
    },
    {
        name: "Priya Singh",
        marks: 95,
        class: "9th",
        address: "Nagpur, Maharashtra"
    },
    {
        name: "Aarav Mehta",
        marks: 80,
        class: "10th",
        address: "Nashik, Maharashtra"
    },
    {
        name: "Rahul Verma",
        marks: 90,
        class: "12th",
        address: "Delhi, India"
    },
    {
        name: "Ananya Gupta",
        marks: 78,
        class: "8th",
        address: "Jaipur, Rajasthan"
    },
    {
        name: "Vikram Joshi",
        marks: 92,
        class: "11th",
        address: "Bengaluru, Karnataka"
    },
    {
        name: "Neha Kumari",
        marks: 83,
        class: "9th",
        address: "Patna, Bihar"
    },
    {
        name: "Mohammed Sheikh",
        marks: 95,
        class: "12th",
        address: "Panvel, Maharashtra"
    },
    {
        name: "Ahmed Sheikh",
        marks: 99,
        class: "12th",
        address: "Jafilia, Dubai"
    },
    {
        name: "Abhishek malhan",
        marks: 96,
        class: "11th",
        address: "Gurugram, Haryana"
    }
];

const studentContainer = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function displayStudents(studentList) {
    if (studentList.length === 0) {
        studentContainer.innerHTML =
            '<p class="no-results">No students found.</p>';
        return;
    }

    studentContainer.innerHTML = studentList.map(student => `
        <div class="student-card">
            <h3>Student Name: ${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}%</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");
}


function searchStudents() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );

    displayStudents(filteredStudents);
}


searchInput.addEventListener("input", searchStudents);


searchButton.addEventListener("click", searchStudents);


displayStudents(students);