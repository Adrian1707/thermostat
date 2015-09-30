$( "#btnUp" ).click(function() {
 upButton( $( "span:first" ));
});

$( "#btnDown" ).click(function() {
 downButton( $( "span:first" ) );
});

$( "#btnReset" ).click(function() {
 resetButton( $( "span:first" ) );
});

function upButton( j ) {
 var n = parseInt( j.text());
 j.text( n + 1 );
}

function downButton( j ) {
 var n = parseInt( j.text());
 j.text( n - 1 );
}

function resetButton( j ) {
 var n = parseInt( j.text(20));
}
