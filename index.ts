import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';

const map = new Map('map');
const user = new User();
const company = new Company();

setTimeout(() => {
  map.addMarker(user, true);
}, 1000);
