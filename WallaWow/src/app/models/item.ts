export class Item {
  id: number = 0;
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
  favorite: boolean;

  constructor(title: string,
              description: string,
              price: string,
              email: string,
              image: string,
              favorite?: boolean) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.email = email;
    this.image = image;
    this.favorite = favorite || false;
  }
}
