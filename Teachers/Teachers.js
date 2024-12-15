// DROPDOWN BUTTTON
const buttonDropdown = document.querySelector('.button-arrangement');
const buttonContainer = document.querySelector('.button-dropdown');
const dropdownContent = document.getElementById('arrangement-dropdown');
const dropdownItem = document.querySelectorAll('.dropdown-item');
const selectOption = document.getElementById('select-default');

buttonDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownContent.classList.add('show');
    buttonContainer.classList.add('active');
});
dropdownItem.forEach((item) => {
    item.addEventListener('click', () => {
        selectOption.textContent=item.textContent;
        dropdownContent.classList.remove('show');
        buttonContainer.classList.remove('active');
    })
});

window.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
});

//TEACHER LIST
const teacherList = [
    {
        name: 'Julian King',
        course: 'Mathematics',
    },
    {
        name: 'Aria Mitchell',
        course: 'Science',
    },
    {
        name: 'Mason Scott',
        course: 'Art',
    },
    {
        name: 'Hannah Ross',
        course: 'Biology',
    },
     {
        name: 'Nathan Parker',
        course: 'History',
    },
    {
        name: 'Zoe Phillips',
        course: 'Physics',
    },
    {
        name: 'Caleb Cooper',
        course: 'Algorithm',
    },
    {
        name: 'Victoria Gray',
        course: 'Engilsh',
    },
    {
        name: 'Ethan Turner',
        course: 'Programming',
    },
    {
        name: 'Chloe Reed',
        course: 'Science',
    },
    {
        name: 'Matthew Foster',
        course: 'Art',
    },
    {
        name: 'Ella Murphy',
        course: 'Biology',
    },
]
const teachersList = document.getElementById('teachers-list');
teacherList.forEach((item) => {
    teachersList.innerHTML += `
<div class="teacher-container">
    <div class="teacher-picture"></div>
    <h3>${item.name}</h3>
    <p>${item.course}</p>
    <div class="teacher-icon">
    <i class="fa-solid fa-phone"></i>
    <i class="fa-solid fa-envelope"></i>
    </div>
</div>
`
})

//FOOTER
const pageNumberElements = document.querySelectorAll('.pagenumber');
pageNumberElements.forEach((pageNumber) => {
    pageNumber.addEventListener('click', (event) => {
        pageNumberElements.forEach((number) => number.classList.remove('active'));
        event.target.classList.add('active');
    });
});


let activePage=1;

//DEFAULT
const defaultPage = document.querySelector('.pagenumber');
defaultPage.classList.add('active');
// PREVIOUS BUTTON
const prevBtn = document.getElementById('previousPage');
prevBtn.addEventListener('click', () => {
    if (activePage > 1) {
        activePage -= 1;
        pageNumberElements.forEach((pageNumber) => pageNumber.classList.remove('active'));
        const activePageNumber = document.querySelector(`.pagenumber[data-page="${activePage}"]`);
        activePageNumber.classList.add('active');
    }
});

// NEXT BUTTON
const nextBtn = document.getElementById('nextPage');
nextBtn.addEventListener('click', () => {
    if (activePage < 3) {
        activePage += 1;
        pageNumberElements.forEach((pageNumber) => pageNumber.classList.remove('active'));
        const activePageNumber = document.querySelector(`.pagenumber[data-page="${activePage}"]`);
        activePageNumber.classList.add('active');
    }
});
