import React from "react";
import "./Menu.css"; // Custom styling for menu section

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>

        <div className="row">
          {/* Indian Cuisine */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Indian Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/paneer tikka.png"
                  alt="Paneer Tikka"
                  className="menu-image"
                />
                <h4>Paneer Tikka</h4>
                <p>Grilled Indian cottage cheese marinated with spices.</p>
              </li>
              <li>
                <img
                  src="/images/tandoori naan.png"
                  alt="Tandoori Naan"
                  className="menu-image"
                />
                <h4>Tandoori Naan</h4>
                <p>Traditional Indian flatbread baked in a clay oven.</p>
              </li>
              <li>
                <img
                  src="/images/butter chicken.png"
                  alt="Butter Chicken"
                  className="menu-image"
                />
                <h4>Butter Chicken</h4>
                <p>Creamy tomato-based curry with tender chicken.</p>
              </li>
              <li>
                <img
                  src="/images/pani puri.png"
                  alt="Pani Puri"
                  className="menu-image"
                />
                <h4>Pani Puri</h4>
                <p>
                  Popular Indian street food with crispy puris and tangy water.
                </p>
              </li>
              <li>
                <img
                  src="/images/chicken biryani.png"
                  alt="Chicken Biryani.png"
                  className="menu-image"
                />
                <h4>Chicken Biryani</h4>
                <p>Flavored rice cooked with chicken, spices, and herbs.</p>
              </li>
            </ul>
          </div>

          {/* Korean Cuisine */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Korean Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/kimchi.png"
                  alt="Kimchi"
                  className="menu-image"
                />
                <h4>Kimchi</h4>
                <p>
                  Traditional fermented vegetables, mostly cabbage and radishes.
                </p>
              </li>
              <li>
                <img
                  src="/images/bulgogi.png"
                  alt="Bulgogi"
                  className="menu-image"
                />
                <h4>Bulgogi</h4>
                <p>Grilled marinated beef, a Korean delicacy.</p>
              </li>
              <li>
                <img
                  src="/images/ramen.png"
                  alt="Ramen"
                  className="menu-image"
                />
                <h4>Ramen</h4>
                <p>
                  Korean-style noodles served with savory broth and toppings.
                </p>
              </li>
              <li>
                <img
                  src="/images/buldak.png"
                  alt="Buldak"
                  className="menu-image"
                />
                <h4>Buldak</h4>
                <p>Spicy grilled chicken dish, known as "fire chicken". </p>
              </li>
              <li>
                <img
                  src="/images/budae jjigae.png"
                  alt="Budae Jjigae"
                  className="menu-image"
                />
                <h4>Budae Jjigae</h4>
                <p>Army stew, a mix of American and Korean ingredients.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* Italian */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Italian Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/pizza.png"
                  alt="Pizza"
                  className="menu-image"
                />
                <h4>Pizza</h4>
                <p>
                  Classic Italian pizza with tomato sauce, cheese, and toppings.
                </p>
              </li>
              <li>
                <img
                  src="/images/pasta.png"
                  alt="Pasta"
                  className="menu-image"
                />
                <h4>Pasta</h4>
                <p>Italian pasta served with rich sauces.</p>{" "}
              </li>
              <li>
                <img
                  src="/images/risotto.png"
                  alt="Risotto"
                  className="menu-image"
                />
                <h4>Risotto</h4>
                <p>Creamy rice dish cooked with broth and other ingredients.</p>
              </li>
              <li>
                <img
                  src="/images/lasagna.png"
                  alt="Lasagna"
                  className="menu-image"
                />
                <h4>Lasagna</h4>
                <p>Layered pasta with rich meat sauce and cheese.</p>
              </li>
            </ul>
          </div>

          {/* Mexican Cuisine */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Mexican Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/Tacos.png"
                  alt="Tacos"
                  className="menu-image"
                />
                <h4>Tacos</h4>
                <p>
                  Soft or crispy tortilla filled with meats, cheese, and
                  vegetables.
                </p>
              </li>
              <li>
                <img
                  src="/images/burritos.png"
                  alt="Burritos"
                  className="menu-image"
                />
                <h4>Burritos</h4>
                <p>
                  Large wheat tortilla wrapped around a filling of meat, beans,
                  and rice.
                </p>
              </li>
              <li>
                <img
                  src="/images/quesadillas.png"
                  alt="Quesadillas"
                  className="menu-image"
                />
                <h4>Quesadillas</h4>
                <p>
                  Grilled tortilla filled with melted cheese and various
                  ingredients.
                </p>
              </li>
              <li>
                <img
                  src="/images/nachos.png"
                  alt="Nachos"
                  className="menu-image"
                />
                <h4>Nachos</h4>
                <p>
                  Crunchy tortilla chips topped with melted cheese and other
                  toppings.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          {/* South Indian Cuisine */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">South Indian Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img src="/images/dosa.png" alt="Dosa" className="menu-image" />
                <h4>Dosa </h4>
                <p>
                  Crispy South Indian crepe made from fermented rice batter.
                </p>
              </li>
              <li>
                <img src="/images/idli.png" alt="Idli" className="menu-image" />
                <h4>Idli</h4>
                <p>Steamed rice cakes served with chutney and sambar.</p>
              </li>
              <li>
                <img src="/images/vada.png" alt="Vada" className="menu-image" />
                <h4>Vada</h4>
                <p>
                  Fried lentil donuts served with coconut chutney and sambar.
                </p>
              </li>
            </ul>
          </div>

          {/* Spanish Cuisine */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Spanish Cuisine</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/paella.png"
                  alt="Paella"
                  className="menu-image"
                />
                <h4>Paella</h4>
                <p>Traditional Spanish rice dish with seafood and saffron.</p>
              </li>
              <li>
                <img
                  src="/images/gazpacho.png"
                  alt="Gazpacho"
                  className="menu-image"
                />
                <h4>Gazpacho</h4>
                <p>Cold tomato-based soup from Andalusia.</p>
              </li>
              <li>
                <img
                  src="/images/churros.png"
                  alt="Churros"
                  className="menu-image"
                />
                <h4>Churros</h4>
                <p>
                  Deep-fried dough pastry, often served with chocolate sauce.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          {/* Cakes */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Cakes</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/chocolate cake.png"
                  alt="Chocolate Cake"
                  className="menu-image"
                />
                <h4>Chocolate Cake</h4>
                <p>Rich and moist chocolate cake with a creamy ganache.</p>
              </li>
              <li>
                <img
                  src="/images/red valvate.png"
                  alt="Red Velvet"
                  className="menu-image"
                />
                <h4>Red Velvet</h4>
                <p>Classic red velvet cake with cream cheese frosting.</p>
              </li>
              <li>
                <img
                  src="/images/cheese cake.png"
                  alt="Cheesecake"
                  className="menu-image"
                />
                <h4>Cheesecake</h4>
                <p>Delicious cheesecake with a buttery graham cracker crust.</p>
              </li>
              <li>
                <img
                  src="/images/raspberry cake.png"
                  alt="Cheesecake"
                  className="menu-image"
                />
                <h4>Raspberry Cake</h4>
                <p>Fresh raspberry cake with whipped cream frosting.</p>
              </li>
            </ul>
          </div>

          {/* Ice-creams */}
          <div className="col-lg-6 col-md-12">
            <h3 className="menu-category">Ice-creams</h3>
            <ul className="menu-list">
              <li>
                <img
                  src="/images/chocolate ice cream.png"
                  alt="Chocolate Ice Cream"
                  className="menu-image"
                />
                <h4>Chocolate Ice Cream</h4>
                <p>Rich and creamy chocolate ice cream made with real cocoa.</p>
              </li>
              <li>
                <img
                  src="/images/butter scotch ice cream.png"
                  alt="Vanilla Ice Cream"
                  className="menu-image"
                />
                <h4>Butter Scotch Ice Cream</h4>
                <p>
                  Classic Butter Scotch ice cream with a smooth, creamy texture.
                </p>
              </li>
              <li>
                <img
                  src="/images/strawberry ice cream.png"
                  alt="Strawberry Ice Cream"
                  className="menu-image"
                />
                <h4>Strawberry Ice Cream</h4>
                <p>
                  Refreshing strawberry ice cream made with fresh strawberries.
                </p>
              </li>
              <li>
                <img
                  src="/images/icecream combo.png"
                  alt="Combo Ice Cream"
                  className="menu-image"
                />
                <h4>Combo Ice Cream</h4>
                <p>Mixed scoop ice cream with a variety of flavors.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
