class Command {
    readonly name: string;
    readonly code: number;

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
}

const command = new Command('exec', 10);

console.log(JSON.stringify(command));