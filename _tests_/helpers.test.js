const {format_date} = require('../utils/helpers')

test('format_date() returns a date', () => {
    const date = new date('2022-04-03');
    expect(format_date(date)).toBe('04,03,2022');

});