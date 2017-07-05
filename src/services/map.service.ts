import {Injectable} from '@angular/core';
import {Location} from '../core/location.class';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
    map: Map;
    baseMaps: any;

    constructor() {

        (mapboxgl as any).accessToken = 'pk.eyJ1Ijoib3N3YWxkb3NhbGF6YXIiLCJhIjoiY2ozeW1pZnlhMDA1czMybXozcG10MTIxayJ9.Iga8ePv_RzEkulm6HQjD2Q';

        this.baseMaps = [
            { name: 'Street', id: 'street' },
            { name: 'Bright', id: 'bright' },
            { name: 'Light', id: 'light' },
            { name: 'Satellite', id: 'satellite' }
        ];
    }

}
