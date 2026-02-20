import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  searchText = '';
  selectedCategory = 'All';

  cartCount = 0;
  totalPrice = 0;

  categories = ['All', 'Pain Relief', 'Vitamins', 'Cold & Flu', 'Antibiotics', 'First Aid'];

  products = [
    {
      name: 'Paracetamol',
      description: 'Pain reliever and fever reducer',
      price: 3.50,
      category: 'Pain Relief',
      image: 'https://www.rosepharmacy.com/ph1/wp-content/uploads/2016/09/67195-800x931.jpg'
    },
    {
      name: 'Vitamin C',
      description: 'Immune system booster',
      price: 5.00,
      category: 'Vitamins',
      image: 'https://m.media-amazon.com/images/I/81SYefJfdYL._AC_SL1000__.jpg'
    },
    {
      name: 'Cough Syrup',
      description: 'Relieves cough and sore throat',
      price: 6.75,
      category: 'Cold & Flu',
      image: 'https://www.stepharmaceuticals.com/wp-content/uploads/2025/02/COUGH-SYRUP-PELARGONIUM_PRESERVATIVE-FREE_2000x2000.png'
    },
    {
      name: 'Antiseptic Spray',
      description: 'For wound cleaning and protection',
      price: 4.20,
      category: 'First Aid',
      image: 'https://betadine.com/wp-content/uploads/2022/06/betadine-wet-spray-bottle900.png'
    }
  ];

  get filteredProducts() {
    return this.products.filter(product =>
      (this.selectedCategory === 'All' || product.category === this.selectedCategory) &&
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToCart(product: any) {
    this.cartCount++;
    this.totalPrice += product.price;
    alert(`✓ ${product.name} added to cart!`);
  }
}
