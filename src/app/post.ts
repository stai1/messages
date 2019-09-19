export class Post {
  constructor(public id: number, public time: Date, public title: string, public content: string, public name: string = "") {
  }
}