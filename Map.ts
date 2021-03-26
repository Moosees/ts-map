import { Loader } from '@googlemaps/js-api-loader';
import { apiKey } from './env';

interface MapOptions {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const loader = new Loader({
  apiKey: apiKey,
  version: 'weekly',
});

const defaultOptions: MapOptions = {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
};

export class Map {
  private map: google.maps.Map;

  constructor(elementId: string, options?: MapOptions) {
    loader.load().then(() => {
      this.map = new google.maps.Map(
        document.getElementById(elementId) as HTMLElement,
        { ...defaultOptions, ...options }
      );
    });
  }
}
