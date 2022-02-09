export class Course{

  id:number
  name: string
  imageUrl: string
  price: number
  duration: number
  rating: number
  releaseDate:string
  code:string
  description:string

  constructor(id:number, name:string, imageUrl:string, price:number, duration:number, rating:number, releaseDate:string, code:string, description:string){
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
    this.price = price
    this.duration = duration
    this.rating = rating
    this.releaseDate = releaseDate
    this.code = code
    this.description = description
  }

}

