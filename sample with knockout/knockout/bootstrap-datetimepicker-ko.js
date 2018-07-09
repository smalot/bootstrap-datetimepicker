ko.bindingHandlers.datetimepicker = {
	init: function (element, valueAccessor, allBindingsAccessor, data, context) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		$(element).datetimepicker().on("changeDate", function (ev) {
			if (value.currentDate) value.currentDate(ev.date);
			if (value.currentUTCDate) value.currentUTCDate(ev.date != null ? new Date(ev.date.getTime() - (ev.date.getTimezoneOffset() * 60000)) : null);
		});
	},
	update: function (element, valueAccessor, allBindingsAccessor, data, context) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		if (value.startDate) {
			var startDate = value.startDate();
            if (startDate != null) startDate = new Date(startDate);
            var previousStartDate = $(element).datetimepicker("getStartDate");
            if ((previousStartDate == null ? previousStartDate : previousStartDate.getTime())
                != (startDate == null ? startDate : startDate.getTime()))
                $(element).datetimepicker("setStartDate", startDate);
		}
		if (value.endDate) {
			var endDate = value.endDate();
            if (endDate != null) endDate = new Date(endDate);
            var previousEndDate = $(element).datetimepicker("getEndDate");
            if ((previousEndDate == null ? previousEndDate : previousEndDate.getTime())
                != (endDate == null ? endDate : endDate.getTime()))
                $(element).datetimepicker("setEndDate", endDate);
        }
        if (value.startUTCDate) {
            var startUTCDate = value.startUTCDate();
            if (startUTCDate != null) startUTCDate = new Date(startUTCDate);
            var previousStartUTCDate = $(element).datetimepicker("getStartUTCDate");
            if ((previousStartUTCDate == null ? previousStartUTCDate : previousStartUTCDate.getTime())
                != (startUTCDate == null ? startUTCDate : startUTCDate.getTime()))
                $(element).datetimepicker("setStartUTCDate", startUTCDate);
        }
        if (value.endUTCDate) {
            var endUTCDate = value.endUTCDate();
            if (endUTCDate != null) endUTCDate = new Date(endUTCDate);
            var previousEndUTCDate = $(element).datetimepicker("getEndUTCDate");
            if ((previousEndUTCDate == null ? previousEndUTCDate : previousEndUTCDate.getTime())
                != (endUTCDate == null ? endUTCDate : endUTCDate.getTime()))
                $(element).datetimepicker("setEndUTCDate", endUTCDate);
        }
		if (value.currentDate) {
			var currentDate = value.currentDate();
            if (currentDate != null) currentDate = new Date(currentDate);
            var previousDate = $(element).datetimepicker("getDate");
            if ((previousDate == null ? previousDate : previousDate.getTime())
                != (currentDate == null ? currentDate : currentDate.getTime()))
                $(element).datetimepicker("setDate", currentDate);
		}
		if (value.currentUTCDate) {
			var currentUTCDate = value.currentUTCDate();
            if (currentUTCDate != null) currentUTCDate = new Date(currentUTCDate);
            var previousCurrentUTCDate = $(element).datetimepicker("getUTCDate");
            if ((previousCurrentUTCDate == null ? previousCurrentUTCDate : previousCurrentUTCDate.getTime())
                != (currentUTCDate == null ? currentUTCDate : currentUTCDate.getTime()))
                $(element).datetimepicker("setUTCDate", currentUTCDate);
		}
		if (value.referenceDate) {
			var referenceDate = value.referenceDate();
            if (referenceDate != null) referenceDate = new Date(referenceDate);
            var previousReferenceDate = $(element).datetimepicker("getReferenceDate");
            if ((previousReferenceDate == null ? previousReferenceDate : previousReferenceDate.getTime())
                != (referenceDate == null ? referenceDate : referenceDate.getTime()))
                $(element).datetimepicker("setReferenceDate", referenceDate);
		}
		if (value.referenceUTCDate) {
			var referenceUTCDate = value.referenceUTCDate();
            if (referenceUTCDate != null) referenceUTCDate = new Date(referenceUTCDate);
            var previousreferenceUTCDate = $(element).datetimepicker("getReferenceUTCDate");
            if ((previousreferenceUTCDate == null ? previousreferenceUTCDate : previousreferenceUTCDate.getTime())
                != (referenceUTCDate == null ? referenceUTCDate : referenceUTCDate.getTime()))
                $(element).datetimepicker("setReferenceUTCDate", referenceUTCDate);
		}
	}
};