$(function(){
  
    $('.fromdate').datepicker();


  $('.chart-notvalid').easyPieChart({
    barColor: 'red',
    lineCap: 'round',
    lineWidth: 5,
    size: 70,
    scaleColor: false
  });
  $('.chart-correctionsrequested').easyPieChart({
    barColor: 'orange',
    lineCap: 'round',
    lineWidth: 5,
    size: 70,
    scaleColor: false
  });
  $('.chart-valid').easyPieChart({
    barColor: 'green',
    lineCap: 'round',
    lineWidth: 5,
    size: 70,
    scaleColor: false
  });
});