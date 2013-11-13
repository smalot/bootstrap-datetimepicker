#!/bin/sh
java -jar ~/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar css/bootstrap-datetimepicker.css > css/bootstrap-datetimepicker.min.css
java -jar ~/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar js/bootstrap-datetimepicker.js > js/bootstrap-datetimepicker.min.js
