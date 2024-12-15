// Tính năng Switch off Student page và Teacher page
const container=document.getElementById("container");
const teacherBtn=document.getElementById("teacherPage");
const studentBtn=document.getElementById("studentPage");

teacherBtn.addEventListener('click', () => {
    container.classList.add('active');
});
studentBtn.addEventListener('click', () => {
    container.classList.remove('active')
});

// Tính năng Hide&Unhide Password
const passwordIcon = document.querySelectorAll(".togglePassword");
const passwordInput = document.querySelectorAll(".password");
passwordIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const input = passwordInput[index];
        const type = input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);
        icon.classList.toggle('fa-eye'); 
        icon.classList.toggle('fa-eye-slash');
    });
});

//Tính năng log in vào trang Dashboard
const loginBtn = document.querySelectorAll('.login');
loginBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const form = button.closest('form');
        const inputElement = form.querySelectorAll('input');
        let hasMissingInput = false;

        inputElement.forEach(input => {
            const errorMessage = input.parentElement.querySelector('.input-missing');

            if (!input.value.trim()) {
                hasMissingInput = true;

                if (errorMessage) {
                    errorMessage.classList.add('show');
                }
            } else {
                if (errorMessage) {
                    errorMessage.classList.remove('show');
                }
            }
        })

        if (hasMissingInput) {
            return;
        }
        window.location.href = 'Dashboard/Dashboard.html';
    });
});