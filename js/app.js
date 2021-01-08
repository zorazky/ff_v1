const body = document.getElementsByTagName('body')[0];


function collapseSidebar() {
    body.classList.toggle('sidebar-expand')
}

window.onclick = function (event) {
    openCloseDropdown(event)
}

function closeAllDropdown() {
    var dropdowns = document.getElementsByClassName('dropdown-expand')
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('dropdown-expand')
    }
}

function openCloseDropdown(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        // 
        // Close dropdown when click out of dropdown menu
        // 
        closeAllDropdown()
    } else {
        var toggle = event.target.dataset.toggle
        var content = document.getElementById(toggle)
        if (content.classList.contains('dropdown-expand')) {
            closeAllDropdown()
        } else {
            closeAllDropdown()
            content.classList.add('dropdown-expand')
        }
    }
}



var options2 = {
    colors: ['#1674A2', '#7DCFD4', '#F8B253', '#D57F09'],
    series: [15.11, 82.34, 2.5, 0],
    labels: ["Apple", "Mango", "Banana", "Papaya"],
    chart: {
        type: 'donut',
        height: 362
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var options3 = {
    colors: ['#7CB342', '#EA3030', '#F8B253'],
    series: [70, 7, 23],
    labels: ["Paid", "Overdue", "Open"],
    chart: {
        type: 'donut',
        height: 362
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 300
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};



var options5 = {
    colors: ['#7DCFD4', '#F8B253', '#D57F09'],
    series: [{
        name: 'Receivables',
        data: [2.49, 2.03, 1.03, .80, .80]
    }, {
        name: 'Payables',
        data: [1.34, .81, .086, .079, .079]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Current', '1 - 30', '31 - 60', '61 - 90', '91+'],
    },
    yaxis: {
        type: 'numeric',
        title: {
            text: '$ (millions)'
        },

    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " millions"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#apex1"), options5);
chart.render();


var chart2 = new ApexCharts(document.querySelector("#apex2"), options3);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#apex3"), options2);
chart3.render();

