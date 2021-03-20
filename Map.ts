import { Loader } from '@googlemaps/js-api-loader';
import { apiKey } from './env';

const loader = new Loader({
  apiKey: apiKey,
  version: 'weekly',
});

export class Map {
  map: google.maps.Map;
  constructor() {
    loader.load().then(() => {
      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        }
      );
    });
  }
}
