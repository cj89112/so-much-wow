$(function() {
    console.log("document is ready!");

    var $start_counter = $( "#event-start" ),
    $drag_counter = $( "#event-drag" ),
    $stop_counter = $( "#event-stop" ),
    counts = [ 0, 0, 0 ];



    $("button").click(function(){
      var x = $("p").position();
      alert("Top: " + x.top + " Left: " + x.left);
    });



  $( "#doge-meme-pic" ).draggable({
    start: function() {
      counts[ 0 ]++;
      updateCounterStatus( $start_counter, counts[ 0 ] );
    },
    drag: function() {
      counts[ 1 ]++;
      updateCounterStatus( $drag_counter, counts[ 1 ] );

    },
    stop: function() {
      counts[ 2 ]++;
      updateCounterStatus( $stop_counter, counts[ 2 ] );


    }
  });

  function updateCounterStatus( $event_counter, new_count ) {

    if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
      $event_counter.addClass( "ui-state-hover" )
        .siblings().removeClass( "ui-state-hover" );
    }

    $( "span.count", $event_counter ).text( new_count );

    calculateWow(new_count); 
  }

function calculateWow (xyz){

    if(xyz < 500){

        console.log('not much wow (' + xyz +  ')');

        $('#output-place').text('not much wow (' + xyz + ') ');

    }
    else {

        console.log('so much wow (' + xyz +  ')!!!!');
    }


    

}



});