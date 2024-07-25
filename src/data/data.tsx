import adidasModel1 from "../assets/Adidas/download 1.jpeg";
import adidasModel2 from "../assets/Adidas/download 3.jpeg";
import adidasModel3 from "../assets/Adidas/download (1).jpeg";
import abibasModel1 from "../assets/Abibas/images.jpeg";
import abibasModel2 from "../assets/Abibas/download.jpeg";
import abibasModel3 from "../assets/Abibas/images (1).jpeg";
import pumaModel1 from "../assets/Puma/download.jpeg";
import pumaModel2 from "../assets/Puma/download (1).jpeg";
import pumaModel3 from "../assets/Puma/download (2).jpeg";


export type ModelItem = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const adidasArr: ModelItem[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const abibasArr: ModelItem[] = [
    {
        id: 1,
        model: 'ABIBAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: abibasModel1,

    },
    {
        id: 2,
        model: 'ABIBAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: abibasModel2
    },
    {
        id: 3,
        model: 'ABIBAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: abibasModel3
    }
]


export const pumaArr: ModelItem[] = [
    {
        id: 1,
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,

    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]