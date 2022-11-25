type PaymentStatus = 'new' | 'paid';

class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}


class PersistentPayment extends Payment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    override pay(date?: Date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}



console.log(new Payment(12));
console.log(new PersistentPayment());
