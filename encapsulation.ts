import * as assert from 'assert';

// ... Ton code ici ...

class BankCustomer {
    private name: string;
    private pin: number;

    constuctor(name: string, pin: number) {
        this.name = name;
        this.pin = pin;
    }

    getname(): string {
        return this.name;
    }
    
    verifyPinInput(a: string): boolean {
        if (this.pin === a) {
            return true;
        } else {
            return false;
        }
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
