import { Injectable } from '@angular/core';

@Injectable()
export class Product {

    id?: number;
    name?: string;
    size?: number;
    contact?: string;
    prize?: number;
    category?: string;
    description?: string;
    //   base64Image
    picture?: string;
    productOwner?: number;


    constructor() {}

}
