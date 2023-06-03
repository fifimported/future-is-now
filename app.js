//map
mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpbGF3aXQiLCJhIjoiY2xobGV1bjVqMTFpbzNkcDFldHdlZWlkZSJ9.HZSNGNg7SxFQ-Re-OoYrLQ';

let loc = [14.431670937832552, 50.08678135535071]

let map = new mapboxgl.Map({
    container: 'map',
    center: loc,
    zoom: 14,
    style: 'mapbox://styles/edilawit/clhleg9ny01pj01p632uogfe0'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

//map marker
var marker = new mapboxgl.Marker({ element: createCustomMarker() })
  .setLngLat([14.431670937832552, 50.08678135535071])
  .setPopup(new mapboxgl.Popup().setHTML('<a href="https://www.google.com/maps/place/Prague+City+University/@50.0869539,14.4235345,15z/data=!3m1!4b1!4m6!3m5!1s0x470b94900227e7c7:0x72a8f977693ca34c!8m2!3d50.0869406!4d14.4338342!16s%2Fm%2F0cp4l1f">Prague City University</a>'))
  .addTo(map);

function createCustomMarker() {
  var el = document.createElement('div');
  el.className = 'marker';
  return el;
}

//highlighting speakers
function highlightText(elementId) {
  var element = document.getElementById(elementId);
  element.classList.add('highlight');

  setTimeout(function() {
    element.classList.remove('highlight');
  }, 2000);
}