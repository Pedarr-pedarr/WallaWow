export class Item {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;

  constructor(title: string,
              description: string,
              price: string,
              email: string,
              image: string) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.email = email;
    this.image = image;
  }
}
