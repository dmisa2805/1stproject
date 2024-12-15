document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    // Get formatted dates
    const todayString = today.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const yesterdayString = yesterday.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const notifications = [
        {
            date: todayString,
            text: 'Karen Hope has created new task at History Lesson',
            highlightName: 'Karen Hope',
            highlightCourse: 'History Lesson',
        },
        {
            date: todayString,
            text: '[REMINDER] Due date of Science Homework task will be coming',
            highlightAlert: '[REMINDER]',
            highlightCourse: 'Science Homework',
        },
        {
            date: todayString,
            text: 'Tony Soap commented at Science Homework',
            highlightName: 'Tony Soap',
            highlightCourse: 'Science Homework',
        },
        {
            date: todayString,
            text: 'Samantha William add 1 file on Finance Class',
            highlightName: 'Samantha William',
            highlightCourse: 'Finance Class',
            file: './Balance Sheet KSDN.xlsx'
        },
        {
            date: todayString,
            text: 'You has moved Biology Homework task to Done',
            highlightName: 'You',
            highlightCourse: 'Biology Homework',
            highlightStatus: 'Done',
        },
        {
            date: yesterdayString,
            text: 'Johnny Ahmad mentioned you at Art Class Homework',
            highlightName: 'Johnny Ahmad',
            highlightCourse: 'Art Class Homework',
        },
        {
            date: yesterdayString,
            text: 'Nadila Adja mentioned you at Programming Homework',
            highlightName: 'Nadila Adja',
            highlightCourse: 'Programming Homework',
        },
        {
            date: yesterdayString,
            text: 'Natasha Romanoff has moved Finance Homework task to Done',
            highlightName: 'Natasha Romanoff',
            highlightCourse: 'Finance Homework',
            highlightStatus: 'Done',
        },
    ];
    const notificationsToday = document.querySelector('div#notifications-today');
    const notificationsYesterday = document.querySelector('div#notifications-yesterday');

    notifications.forEach((notification) => {
        const notifyDiv = document.createElement("div");
        notifyDiv.classList.add("notification-item");

        let highlightedText = notification.text;

        if (notification.highlightName) {
            highlightedText = highlightedText.replace(  
                notification.highlightName,
                `<b style="color: #303972">${notification.highlightName}</b>` 
            );
        };
        if (notification.highlightCourse) {
            highlightedText = highlightedText.replace(
                notification.highlightCourse,
                `<b style="color: #FB7D5B">${notification.highlightCourse}</b>`
            );
        };
        if (notification.highlightStatus) {
            highlightedText = highlightedText.replace(
                notification.highlightStatus,
                `<b style="color: #4CBC9A">${notification.highlightStatus}</b>`
            )
        };
        if (notification.highlightAlert) {
            highlightedText = highlightedText.replace(
                notification.highlightAlert,
                `<b style="color: #FF4550">${notification.highlightAlert}</b>`
            )
        };

        notifyDiv.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
        <p class="date">${notification.date}</p>
        <h3>${highlightedText}</h3>
        ${notification.file ? `<div class="file-box">
        <div class = "file-title-container">
        <div class="file-title">Balance Sheet</div>
        <i class="fa-solid fa-file"></i>
        </div>
        <a href="${notification.file}" class="file-link" target="_blank">Download Here</a>
        </div>` : ""}`
    
        if (notification.date === todayString) {notificationsToday.appendChild(notifyDiv)
        }
        else if (notification.date === yesterdayString) {notificationsYesterday.appendChild(notifyDiv)
        }
});
})