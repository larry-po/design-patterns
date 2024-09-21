//

export interface ITransport {
    use(): string;
}

class Plane implements ITransport {
    use(): string {
        return 'PLANE';
    }
}

class Bus implements ITransport {
    use(): string {
        return 'BUS';
    }
}

//

export abstract class TravelToEurope {
    //it is the factory method
    abstract createTransport(): ITransport;

    buildRoute(): ITransport {
        return this.createTransport();
    }
}

export class PlaneTravelToEurope extends TravelToEurope {
    override createTransport(): ITransport {
        return new Plane();
    }
}

export class BusTravelToEurope extends TravelToEurope {
    override createTransport(): ITransport {
        return new Bus();
    }
}
