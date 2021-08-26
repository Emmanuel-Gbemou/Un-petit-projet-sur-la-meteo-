$(document).ready(function(){
    $("#form").on("submit",function(event){
            event.preventDefault() ;
            console.log($("input").val()) ;
            
            let city=$("input").val() ;

            let Key_Api="551e24424a040c4f9b398fd775ffb792" ;
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key_Api}&units=metric` ;
        
    $.ajax({
        url:url ,
        method:"GET" ,
        dataType:"json" ,

    success:function(res){
        console.log(res) ;

       let temp=res.main.temp ;
       let humidy=res.main.humidity ;
       let MiniTemp=res.main.temp_min ;
       let MaxiTemp=res.main.temp_max ;
       let Latitude=res.coord.lat ;
       let Longitude=res.coord.lon ;
       let Description=res.weather[0]. description ;
       let icon=res.weather[0].icon
      
       $(".res").html(`
    <ul>
    <li>Current Temperature : ${temp} C ;</li>
    <li>Current Humidity: ${humidy} ; </li>
    <li>Minimum Temperature today: ${MiniTemp} ; </li>
    <li>Maximum Temperature today: ${MaxiTemp} ; </li>
    <li>Latitude: ${Latitude} ; </li>
    <li>Longitude: ${Longitude} ; </li>
    <li>Weather Description:<img src="http://openweathermap.org/img/wn/${icon}.png" alt=""/><span>${Description}</span> ; </li>
    </ul>
       `) ;
    },
    error:function(){
        console.log("Il y'a des erreurs") ;
    } 
}) ;
});

}) ;