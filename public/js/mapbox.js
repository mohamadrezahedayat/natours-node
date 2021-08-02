/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibW9oYW1hZHJlemFoZWRheWF0IiwiYSI6ImNrcnNhcTZ4MDB1emoycHFteWJ6OTR4NjAifQ.1QfxJLnPlbID50wPqBfyPg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mohamadrezahedayat/ckrsbmfu1gxls17mxuf4i7qzo',
    scrollZoom: false
  });
  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach(loc => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // add marker
    new mapboxgl.Marker({ Element: el, anchor: 'bottom' })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // extend map nounds to include locations
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
