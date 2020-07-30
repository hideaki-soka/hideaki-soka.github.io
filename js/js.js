var ctx = document.getElementById('myDay');

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['睡眠(0:00-7:30)', 'ベッドで過ごす+読書(7:30-9:00)', '勉強など(9:00-12:00)'],
        datasets: [
            {
                data: [7.5, 1.5, 3],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 35,
            text: 'RRの24時間(午前)'
        },
        legend: {
            display: false
        },
        plugins: {
            labels: {
                render: 'label',
                position: 'default'
            }
        }
    }
});

var ctx2 = document.getElementById('myDay2').getContext('2d');

var myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['UberEats(12:00-13:30)', 'ベッドで過ごす(13:30-15:00)', '勉強orスタバ(15:00-19:00)', 'リングフィット(19:00-20:00)', 'UberEats(20:00-21:00)', 'ベッドで過ごす(21:00-0:00)'],
        datasets: [
            {
                data: [1.5, 1.5, 4, 1, 1, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 35,
            text: 'RRの24時間(午後)'
        },
        legend: {
            display: false
        },
        plugins: {
            labels: {
                render: 'label',
                position: 'default'
            }
        }
    }
});