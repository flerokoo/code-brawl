import { Service } from './service-provider';
import ServiceProvider from './service-provider';

type MessageListener = (data: any) => void;

interface ListenerPair {
    listener: MessageListener;
    once: () => void;
    isOnce: boolean;
}

export default class Messenger implements Service {

    provider: ServiceProvider;
    private pairs: { [msg: string]: ListenerPair[] } = {};
    private onceFunc: () => void;  
    constructor() { }


    post(message:string, data: {[params:string] : any} | any) {
        if (!this.pairs) return;

        let pairs = this.pairs;
        let pair = pairs[message];
        
        if (!!pair) {
            
            let event:any = <any>{ message };

            if (!!data) {
                if (typeof data === 'object') {
                    Object.assign(event, data);
                } else {
                    event.value = data;
                }
            }

            for (let i = 0, n = pair.length; i < n; i++) {
                pair[i].listener(event);

                if (pair[i].isOnce === true) {
                    pair.splice(i, 1);
                    i--;
                    n--;
                }
            }
        }

        return this;
    }

    subscribe(message:string, listener:MessageListener) {
        if (!this.pairs) {
            this.pairs = {};   
            this.onceFunc = function () {
                this._once = true;
            }
        }

        let obj = null;
        let pairs = this.pairs;

        if (!pairs[message]) {
            pairs[message] = [];
        }

        if (!pairs[message].some(o => o.listener === listener)) {

            obj = {
                listener: listener,
                once: this.onceFunc,
                isOnce: false
            };

            pairs[message].push(obj);
        }

        return obj;
    }

    unsubscribe(message:string, listener:MessageListener) {
        if (this.pairs === undefined) return;

        let pairs = this.pairs;
        let pair = pairs[message];

        if (!!pair) {
            
            let idx = pair.findIndex(o => o.listener === listener);

            if (idx !== -1) {
                pair.splice(idx, 1);
            }
        }

    }

    dispose() {      
        this.pairs = null;       
    }

}