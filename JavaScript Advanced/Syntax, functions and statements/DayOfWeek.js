function solve(input) {
    const days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    if (days.hasOwnProperty(input)) {
        console.log(days[input]);
    } else {
        console.log('error');
    }
}

solve(
    'Monday'
)