module('Keyboard Entry 2012', {
    setup: function(){
        /*
            Tests start with picker on March 31, 2012.  Fun facts:

            * February 1, 2012 was on a Wednesday
            * February 29, 2012 was on a Wednesday
            * March 1, 2012 was on a Thursday
            * March 31, 2012 was on a Saturday
        */
        this.input = $('<input type="text" value="31-03-2012">')
                        .appendTo('#qunit-fixture')
                        .datetimepicker({format: "dd-mm-yyyy", minView: 2, autoclose: true})
                        .focus(); // Activate for visibility checks
        this.dp = this.input.data('datetimepicker')
        this.picker = this.dp.picker;
    },
    teardown: function(){
        this.picker.remove();
    }
});


test('enter a day only', function(){
    // enter the 13th
    this.input.val('13');
    this.input.change();

    // Both updated on keyboard entry
    datesEqual(this.dp.viewDate, UTCDate(2012, 2, 13));
    datesEqual(this.dp.date, UTCDate(2012, 2, 13));
    // Month not changed
    var target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'March 2012', 'Title is "March 2012"');

    this.input.val('13-4-');
    this.input.change();

    datesEqual(this.dp.viewDate, UTCDate(2012, 3, 13));
    datesEqual(this.dp.date, UTCDate(2012, 3, 13));
    // Month changed: April 1 (this is not a joke!)
    target = this.picker.find('.datetimepicker-days thead th.switch');
    equal(target.text(), 'April 2012', 'Title is "April 2012"');
});

test('enter non-date-text', function(){
    this.input.val('something');
    this.input.change();

    // Both stay the same on keyboard entry
    datesEqual(this.dp.viewDate, UTCDate(2012, 2, 31));
    datesEqual(this.dp.date, UTCDate(2012, 2, 31));
});