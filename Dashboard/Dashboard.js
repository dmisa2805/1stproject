
// GRADIENT COLOR 
const ctx = document.getElementById('heroChart').getContext('2d');

// Create a linear gradient
const gradient1 = ctx.createLinearGradient(0, 0, 0, 220); 
gradient1.addColorStop(0, 'rgba(252, 196, 62, 0.5)'); 
gradient1.addColorStop(1, 'rgba(252, 196,  62,0)'); 

const gradient2 = ctx.createLinearGradient(0, 0, 0, 220);
gradient2.addColorStop(0, 'rgba(251, 125, 91, 0.5)');
gradient2.addColorStop(1, 'rgba(251, 125, 91, 0)');

// HERO CHART
const heroChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Performance This Week",
            data: [0,40,85,40,0,25,50,35,25,50,70,50],
            backgroundColor: gradient1,
            borderCapStyle: "round",
            borderColor: ["rgba(252,196,62,1)"],
            borderWidth: 5,
            fill: true,
            tension: 0.15,
            pointRadius: 0,
            pointHoverBackgroundColor: ["rgba(255,255,255,1)"],
            pointHoverBorderColor: ["rgba(252,196,62,1)"],
            pointHoverBorderWidth: 7,
            pointHoverRadius: 8,
        },
        {
            label: "Performance Last Week",
            data: [12,30,55,30,10,35,65,30,10,45,90,60],
            backgroundColor: gradient2,
            borderCapStyle: "round",
            borderColor: ["rgba(251, 125, 91, 1)"],
            borderWidth: 5,
            fill: true,
            tension: 0.15,
            pointRadius: 0,
            pointHoverBackgroundColor: ["rgba(255,255,255,1)"],
            pointHoverBorderColor: ["rgba(251, 125, 91, 1)"],
            pointHoverBorderWidth: 7,
            pointHoverRadius: 8,
        }],
        },
    options: {
        scales: {
            y: {
                min: -10,
                max: 110,
                grid: {
                    display: false,
                },
                ticks: {
                    color: ['rgba(160, 152, 174, 1)'],
                    font: {
                        family: 'Poppins',
                        size: 14,
                    },
                    callback: function(value) {
                        return value % 25 === 0 ? value : '';
                    },
                    stepSize: 25,
                },
            },
            x: {
                ticks: {
                    color: ['rgba(160, 152, 174, 1)'],
                    font: {
                        family: 'Poppins',
                        size: 14,
                },
            },
        },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
}
)
//CALENDAR
const monthYearElement = document.getElementById('monthYear');
const prevBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn'); 
let currentDate = new Date ();
const updateCalendar = () => {
    const monthYearString = currentDate.toLocaleString('default', {year: 'numeric', month: 'short'});
    monthYearElement.textContent = monthYearString;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth()-1);
    updateCalendar();
})
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth()+1);
    updateCalendar();
})
updateCalendar();

//DASHBOARD USER ACTIVITY
const userChartElement = document.getElementById('userChart')
const userChart = new Chart (userChartElement, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: "User Activity This Week",
            data: [95,42,38,45,30,65,75],
            backgroundColor: ["rgba(252,196,62,1)"],
            barThickness: 15,
            borderRadius: 10,
        },
        {
            label: "User Activity Last Week",
            data: [75,58,30,40,20,60,50],
            backgroundColor: ["rgba(251, 125, 91, 1)"],
            barThickness: 15,
            borderRadius: 10,
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    color: ['rgba(160, 152, 174, 1)'],
                    font: {
                        family: 'Poppins',
                        size: 12,
                    },
                    callback: function(value) {
                        return value % 25 === 0 ? value : '';
                    },
                    stepSize: 25,
                },
            },
            x: {
                ticks: {
                    color: ['rgba(160, 152, 174, 1)'],
                    font: {
                        family: 'Poppins',
                        size: 12,
                },
            },
        },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})