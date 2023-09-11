function Uni(name: string): any {
    console.log(`Initialisation of ${name}`);

    return function () {
        console.log(`Execution of ${name}`);
    }
}

@Uni('class 1')
@Uni('class 2')
class MyClass {
    @Uni('property 1')
    @Uni('property 2')
    props?: any;

    @Uni('static property 1')
    @Uni('static property 2')
    static props?: any;

    constructor(@Uni('constructor params') _: any) {
    }

    @Uni('method 1')
    @Uni('method 2')
    method(@Uni('method param 1') _: any) {
    }


    @Uni('static method 1')
    @Uni('static method 2')
    static method(@Uni('static method param 1') _: any) {
    }
}

