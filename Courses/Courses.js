document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const dateString = date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    const startTime = new Date()
    startTime.setHours(9,0,0);
    const startTimeString = startTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
    const endTime = new Date()
    endTime.setHours(11,0,0);
    const endTimeString = endTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
    const courses = [
        {
            courseName:'Basic Algorithm',
            courseDetail: 'Algorithm',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'Basic Art',
            courseDetail: 'Art',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'Simple Present Tense',
            courseDetail: 'English',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'HTML & CSS Class',
            courseDetail: 'Programming',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'Economic Principles',
            courseDetail: 'Economic',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'Advanced Art',
            courseDetail: 'Art',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'HTML & CSS Class',
            courseDetail: 'Programming',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
        {
            courseName:'Simple Past Tense',
            courseDetail: 'English',
            courseDate: dateString,
            courseTime: `${startTimeString} - ${endTimeString}`
        },
    ]
    const coursesContainer = document.getElementById('courses-container');
    courses.forEach((course) => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-item');

        courseElement.innerHTML = `
        <h3>${course.courseName}</h3>
        <p>${course.courseDetail}</p>
        <div class="date-container">
            <i class="fa-regular fa-calendar"></i>
            <span>${course.courseDate}</span>
        </div>
        <div class="time-container">
            <i class="fa-regular fa-clock"></i>
            <span>${course.courseTime}</span>
        </div>
        <i class="fa-regular fa-circle-right"></i>        
        `
        coursesContainer.appendChild(courseElement)
    })
})