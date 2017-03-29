;(function ($) {
    $.fn.datetimepicker.dates['fa'] = {
        days: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
        daysShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
        daysMin: ["ی", "د", "س", "چ", "پ", "ج", "ش", "ی"],
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthsShort: ["فرور", "اردی", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        meridiem: ['ق.ظ', 'ب.ظ'],
        today: "امروز",
        clear: 'پاک کردن',
        suffix: [],
        rtl: true,
        weekStart: 6,
        init: function () {
            $.fn.datetimepicker.DPGlobal.Date = JDate;
            $.fn.datetimepicker.DPGlobal.isLeapYear = function (year) {
                const p = 2346;
                const s = 0.24219858156;
                var res = (year + p) * s;
                res = res - Math.floor(res);
                return res < s;
            };
            $.fn.datetimepicker.DPGlobal.getDaysInMonth = function (year, month) {
                return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, ($.fn.datetimepicker.DPGlobal.isLeapYear(year) ? 30 : 29)][month]
            };
        }
    };
}(jQuery));

