const cellClasses = {
    selector: 'js-seats-cell',
    result: 'js-seats-result',

    row: 'ts-seats__row',
    placeholder: 'ts-seats__cell--placeholder',

    base: 'ts-seats__cell',
    unavailable: 'ts-seats__cell--unavailable',
    selected: 'ts-seats__cell--selected',
    taken: 'ts-seats__cell--taken',

    exit: 'ts-seats__cell--exit',
    exitPremium: 'ts-seats__cell--exit-premium',
    exitExtra: 'ts-seats__cell--exit-extra',
    premium: 'ts-seats__cell--premium',
    extra: 'ts-seats__cell--extra',
}

$(function () {
    initSeats();
});

function initSeats() {
    const $table = $('.js-seats-table');
    const $result = $('.js-seats-result');
    const rows = require('./seats.json');

    rows.forEach(row => {
        $table.append(createRow(row));
    });
}

function createRow(row) {
    const $row = $('<div>');
    $row.addClass(cellClasses.row);

    const $title = $('<span>');

    $title.html(row.label);
    $title.addClass(cellClasses.base);
    $title.addClass(cellClasses.placeholder);

    $row.append($title);

    if (row.type == 'seats') {
        row.seats.forEach(seat => {
            $row.append(createCell(seat));
        })
    } else {
        row.seats.forEach(seat => {
            $row.append(createPlaceholder(seat));
        })
    }

    return $row;
}

function createPlaceholder(seat) {
    const $cell = $('<span>');
    $cell.addClass(cellClasses.base);
    $cell.addClass(cellClasses.placeholder);
    $cell.html(seat);

    return $cell;
}

function createCell(seat) {
    const $cell = $('<span>');
    $cell.addClass(cellClasses.selector);
    $cell.addClass(cellClasses.base);

    if (!seat.isTaken && !seat.isUnavailable) {
        $cell.tooltip({title: seat.index, delay: 500});
    }

    if (seat.isUnavailable) {
        $cell.addClass(cellClasses.unavailable)
    }

    if (seat.isTaken) {
        $cell.addClass(cellClasses.taken)
    }

    switch (seat.type) {
        case 'exit':
            $cell.addClass(cellClasses.exit)
            break;
        case 'exit-premium':
            $cell.addClass(cellClasses.exitPremium)
            break;
        case 'exit-extra':
            $cell.addClass(cellClasses.exitExtra)
            break;
        case 'extra':
            $cell.addClass(cellClasses.extra)
            break;
        case 'premium':
            $cell.addClass(cellClasses.premium)
            break;
        default:
            break;
    }

    $cell.click(() => {
        if (!seat.isTaken && !seat.isUnavailable) {
            $(`.${cellClasses.result}`).html(seat.index);
            $(`.${cellClasses.selector}`).removeClass(cellClasses.selected);
            $cell.addClass(cellClasses.selected);
        }
    })

    return $cell;
}

