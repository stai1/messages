export class Post {
  constructor(public id: number, public time: number, public title: string, public content: string, public name: string = "") {
  }
}