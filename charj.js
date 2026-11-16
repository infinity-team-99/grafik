export function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],

            datasets: [{
                label: 'Monthly Sales',
                data: [202, -136, 3, -405, 2, 703],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            },
            {
                label: 'Monthly Sales',
                data: [-612, 36, -300, 5, 2, 300, 790],
                borderColor: 'yellow',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }
        
        ]
        },
        options: {
            interaction: {
            mode: 'index',
            intersect: false,
        },
            responsive: true,
            plugins: {
                
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            },
                legend: {
                    display: true
                }
            },
            scales: {
            x: {
                display: true
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                min: -800,
                max: 600
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                min: -1000,
                max: 800,
                grid: {
                    drawOnChartArea: false
                }
            }
        }}
    });
    const mtx = document.getElementById('barbek').getContext('2d');
    new Chart(mtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [25, 10, 99, 10, 10, ],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
    const ktx = document.getElementById('gorizontbar').getContext('2d');
    new Chart(ktx, {
        type: 'doughnut',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 99, 3, 5, 2, 3],
                borderColor: 'white',
                backgroundColor: 'yellowgreen',
                borderWidth: 3,
                fill: false
            }
        ]

        },


        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const ptx = document.getElementById('piebek').getContext('2d');
    new Chart([ptx], {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'white',
                borderWidth: 3,
                backgroundColor: ' yellow',

                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
    const ttx = document.getElementById('barber').getContext('2d');
    new Chart(ttx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul', 'aaaaavgust'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 10, 3, -4, 5, 2, -8, 20],
                borderColor: 'blue',
                backgroundColor: 'blue',

                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const mad = document.getElementById('doughnutbek').getContext('2d');
    new Chart(mad, {
        type: 'polarArea',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 10, 3, 5, 2, 8],
                borderColor: 'black',
                backgroundColor: '#08eef633',

                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

    const doad = document.getElementById('polararea').getContext('2d');
    new Chart(doad, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 90, 70, 60, 40, 20, 80],
                borderColor: 'yellow',
                backgroundColor: '#00ff3c31',
                borderWidth: 2,

                fill: true
            },
            {
                label: 'Monthly Sales',
                data: [10, 30, 20, 30, 50, 40, 60],
                borderColor: 'blue',
                borderWidth: 2,
                backgroundColor: '#6200ff41',

                fill: true
            }
        ]
        },
        

        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });


    const doda = document.getElementById('linebek').getContext('2d');
    new Chart(doda, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'iyun', 'iyul'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 90, 70, 60, 40, 20, 80],
                borderColor: 'yellow',
                backgroundColor: '#b9c0003c',
                borderWidth: 2,

                fill: true
            },
            {
                label: 'Monthly Sales',
                data: [10, 30, 20, 30, 50, 40, 60],
                borderColor: 'blue',
                borderWidth: 2,
                backgroundColor: '#27009259',

                fill: true
            }
        ]
        },
        

        options: {
                indexAxis: 'y',

            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
















}































































































