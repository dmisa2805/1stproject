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
//STUDENTS DATA
const day = new Date ();
const dayString = day.toLocaleDateString('en-US', {year:'numeric', month: 'long', day: 'numeric'});

const studentsList1= [
    {
        name: 'Emily Johnson',
        id:'001',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Ethan Williams',
        id:'002',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Olivia Brown',
        id:'003',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Noah Martinez',
        id:'004',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Sophia Davis',
        id:'005',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Benjamin Thompson',
        id:'006',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Ava Rodriguez',
        id:'007',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'William Lee',
        id:'008',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Mia Garcia',
        id:'009',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },
    {
        name: 'Lucas Taylor',
        id:'010',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII A',
    },   
]
const studentsList2= [
    {
        name: 'Charlotte Wilson',
        id:'011',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'James Anderson',
        id:'012',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Emma Hernandez',
        id:'013',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Alexander Nguyen',
        id:'014',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Isabella Smith',
        id:'015',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Daniel Johnson',
        id:'016',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Amelia Miller',
        id:'017',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Michael Clark',
        id:'018',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'David Taylor',
        id:'019',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
    {
        name: 'Sophia Martin',
        id:'020',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII B',
    },
]
const studentsList3 = [
    {
        name: 'Abigail Carter',
        id:'021',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Jackson Brooks',
        id:'022',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Jacob Harris',
        id:'023',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Lily Perez',
        id:'024',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Harper Collins',
        id:'025',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Samuel Robinson',
        id:'026',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Grace Evans',
        id:'027',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Henry Walker',
        id:'028',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Scarlett Bennett',
        id:'029',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
    {
        name: 'Elijah Moore',
        id:'030',
        date: dayString,
        city: 'Ho Chi Minh City',
        contact: 'mailto:email@gmail.com',
        class: 'VII C',
    },
]
const studentsLists = [studentsList1,studentsList2,studentsList3];

function showStudents(page) {
    const studentsList = studentsLists[page - 1];
    const studentsListElement = document.getElementById('students-list');
    const showingRange = document.getElementById('showing-range');

studentsListElement.innerHTML = '';
studentsList.forEach((student) => {
    studentsListElement.innerHTML+= `
    <tr class="table-header">
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.date}</td>
        <td>${student.city}</td>
        <td class="email-container"><a href="${student.contact}"><i class="fa-solid fa-envelope"></i></a></td>
        <td>${student.class}</th>
        <td><div class="action-button">...</div></td>
    </tr>`
})
const start = (page - 1) * 10 + 1;
const end = start + studentsList.length - 1;
showingRange.textContent = `${start} - ${end}`;
}
//SWITCH PAGE
const pageNumberElements = document.querySelectorAll('.pagenumber');
pageNumberElements.forEach((pageNumber) => {
    pageNumber.addEventListener('click', (event) => {
        pageNumberElements.forEach((number) => number.classList.remove('active'));
        event.target.classList.add('active');

        // Get the page number from the clicked element and show the students
        const page = Number(event.target.getAttribute('data-page'));
        showStudents(page);
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
        showStudents(activePage);
        pageNumberElements.forEach((pageNumber) => pageNumber.classList.remove('active'));
        const activePageNumber = document.querySelector(`.pagenumber[data-page="${activePage}"]`);
        activePageNumber.classList.add('active');
    }
});

// NEXT BUTTON
const nextBtn = document.getElementById('nextPage');
nextBtn.addEventListener('click', () => {
    if (activePage < studentsLists.length) {
        activePage += 1;
        showStudents(activePage);
        pageNumberElements.forEach((pageNumber) => pageNumber.classList.remove('active'));
        const activePageNumber = document.querySelector(`.pagenumber[data-page="${activePage}"]`);
        activePageNumber.classList.add('active');
    }
});


showStudents(activePage);