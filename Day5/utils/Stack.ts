class Stack<T> {
  private items: T[];
  private count: number;

  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element: T) {
    this.items.push(element);
    this.count++;
  }

  pop(): T {
    this.count--;
    return this.items.pop();
  }

  size(): number {
    return this.count;
  }
}
