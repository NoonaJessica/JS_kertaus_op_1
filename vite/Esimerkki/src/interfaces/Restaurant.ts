interface Restaurant {
    name: string;
    location:{
        type: 'Point';
        coordinates: number[];
    }
company: 'Sodexo' | 'Compass group';
address: string;
}

export type {Restaurant}
