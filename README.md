bootstrap-datetimepicker
========================

# Project

This project is a fork of [bootstrap-datepicker project](https://github.com/eternicode/bootstrap-datepicker).


# Home

As 'bootstrap-datepicker' is restricted to the date scope (day, month, year), this project aims to support too the time picking (hour, minutes).


# Screenshots

## Month view

![Datetimepicker month view](https://raw.github.com/smalot/bootstrap-datetimepicker/master/screenshot/standard_month.png)

This view allows to select the year in a range of 10 years.

## Year view

![Datetimepicker year view](https://raw.github.com/smalot/bootstrap-datetimepicker/master/screenshot/standard_year.png)

This view allows to select the month in the selected year.

## Decade year view

![Datetimepicker decade year view](https://raw.github.com/smalot/bootstrap-datetimepicker/master/screenshot/standard_decade.png)

This view allows to select the day in the selected month.

## Day view

![Datetimepicker day view](https://raw.github.com/smalot/bootstrap-datetimepicker/master/screenshot/standard_day.png)

This view allows to select the hour in the selected day.

## Hour year view

![Datetimepicker hour view](https://raw.github.com/smalot/bootstrap-datetimepicker/master/screenshot/standard_hour.png)

This view allows to select the preset of minutes in the selected hour.

# Example

Attached to a field with the format specified via options:

```html
<input type="text" value="2012-05-15 21:05" id="datepicker">
```
```javascript
$('#datepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
});
```
