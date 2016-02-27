

export const formatTime = (function() {
    const days = [
        "Mon.", "Tues.", "Wed.",
        "Thurs", "Fri.", "Sat.", "Sun."
    ]
    const month_names = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
    ]
    function format(datetime) {
        const cur = new Date(datetime)
        return `${days[cur.getDay() - 1]} ${month_names[cur.getMonth()]} ${cur.getDate()} ${cur.getFullYear()}`

    }

    return format
})()
