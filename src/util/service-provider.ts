
type ServiceConstructor = (new (provider:ServiceProvider) => Service)

export interface Service {
    provider?: ServiceProvider;
}

export default class ServiceProvider {

    private services: { [name: string]: Service } = {};
    private serviceConstructors: { [name: string]: ServiceConstructor } = {};
    private values: { [name: string]: any } = {};

    constructor() { }

    registerService(name: string, cons:ServiceConstructor) {
        this.serviceConstructors[name] = cons;
        return this;
    }

    getService<T extends Service>(name: string):T {
        let service:Service = this.services[name];

        if (!service) {
            let cons: ServiceConstructor = this.serviceConstructors[name];
            
            if (!cons) {
                throw new Error(`No service "${name}"`);
            }

            this.services[name] = service = new cons(this);
            
        }

        return <T>service;
    }

    registerValue(name: string, val: any) {
        this.values[name] = val;
        return this;
    }

    getValue<T>(name: string): T {
        let val = <T>this.values[name];
        if (!val) {
            throw new Error(`No value ${name}`)
        }
        return val;        
    }
    
}