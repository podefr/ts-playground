class Request1 {
    readonly field1: string;

    constructor(data: any) {
        if (typeof data.field1 !== "string") {
            throw new Error('invalid');
        }
    
        this.field1 = data.field1;
    }
}

class Request2 {
    readonly field2: string;

    constructor(data: any) {
        if (typeof data.field2 !== "string") {
            throw new Error('invalid');
        }
    
        this.field2 = data.field2;
    }
}

function deserialize<T>(serialized: string, deserializer: new (data: string) => T): T {
    // use nats jsoncodec here
    const deserialized = JSON.parse(serialized);

    return new deserializer(deserialized);
}

function useRequest1(req: Request1) {
    console.log(req);
}

const validatedRequest1 = deserialize<Request1>('{"field1":"hello"}', Request1);

useRequest1(validatedRequest1);

// const validatedRequest2 = new Request2({ field1: 'hello' });

// console.log(Object.getPrototypeOf(validatedRequest1));

// useRequest1(validatedRequest1);
// useRequest1(validatedRequest2 as unknown as Request1);



// console.log(JSON.stringify(validatedRequest1));