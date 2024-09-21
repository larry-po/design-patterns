export interface Plane {
    fly(): string;
}

export interface Bus {
    drive(): string;
}

export class UsualPlane implements Plane {
    fly(): string {
        return 'Usual plane';
    }
}

export class EcoPlane implements Plane {
    fly(): string {
        return 'Eco plane';
    }
}

export class UsualBus implements Bus {
    drive(): string {
        return 'Usual bus';
    }
}

export class EcoBus implements Bus {
    drive(): string {
        return 'Eco bus';
    }
}

export abstract class TransportFactory {
    abstract createBus(): Bus;
    abstract createPlane(): Plane;
}

export class UsualTransportFactory extends TransportFactory {
    createBus(): Bus {
        return new UsualBus();
    }
    createPlane(): Plane {
        return new UsualPlane();
    }
}

export class EcoTransportFactory extends TransportFactory {
    createBus(): Bus {
        return new EcoBus();
    }
    createPlane(): Plane {
        return new EcoPlane();
    }
}
