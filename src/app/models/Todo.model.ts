export class Todo {
    constructor(
        public id: number = -1,
        public name: string = null,
        public description: string = null,
        public done: boolean = false,
        public targetDate: Date = null,
        public byAdmin = false,
    ) { }
}