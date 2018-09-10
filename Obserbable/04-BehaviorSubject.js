const rxjs = require('rxjs');

// EL SUBJECT es a la vez un OBSERVABLE (suscripción y recepción de datos) y OBSERVER (envio de datos)
// EL BehaviorSubject recibe el último valor anterior a la suscripción
class ExampleSubject{
    static testSubject(){
        const subject$ = new rxjs.BehaviorSubject();

        subject$.subscribe(
            data => console.log('Observer-1',data)
        );

        subject$.next(1);
        subject$.next(2);

        let observer2$  = subject$.subscribe(
            data => console.log('Observer-2',data)
        );

        subject$.next(3);
        observer2$.unsubscribe()
        subject$.next(4);
    }
}


module.exports = ExampleSubject;