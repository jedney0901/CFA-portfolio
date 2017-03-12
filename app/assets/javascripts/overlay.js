
// Overlay 1
// console.log("test")
$( document ).ready(function() {
    console.log( "ready!" );

$( "#overlay-menu" ).click(function() {
  console.log("click")
    $( ".overlay" ).addClass('overlay-open');
});
$( ".overlay-close" ).click(function() {
    $( ".overlay" ).removeClass('overlay-open');
});
});

// Overlay 2
// console.log("test")
$( document ).ready(function() {
    console.log( "ready!" );

$( "#trutradie" ).click(function() {
  console.log("click")
    $( ".overlay2" ).addClass('overlay2-open');
});
$( ".overlay-close" ).click(function() {
    $( ".overlay2" ).removeClass('overlay2-open');
});
});

// Overlay 3
// console.log("test")
$( document ).ready(function() {
    console.log( "ready!" );

$( "#dickerdata" ).click(function() {
  console.log("click")
    $( ".overlay3" ).addClass('overlay3-open');
});
$( ".overlay-close" ).click(function() {
    $( ".overlay3" ).removeClass('overlay3-open');
});
});

// Overlay 4
$( document ).ready(function() {
    console.log( "ready!" );

$( "#uberlawyer" ).click(function() {
  console.log("click")
    $( ".overlay4" ).addClass('overlay4-open');
});
$( ".overlay-close" ).click(function() {
    $( ".overlay4" ).removeClass('overlay4-open');
});
});
