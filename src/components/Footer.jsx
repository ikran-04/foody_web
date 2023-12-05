import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-900">
      <div className="w-4/5 m-auto flex justify-between items-start p-10 text-white">
        <div class="w-[300px] footer-section company-section">
          <h1 className="text-3xl font-bold">Foody</h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            odio ultricies, consectetur elit in, vehicula lorem.
          </p>
        </div>
        <div class="footer-section delivery-section">
          <h1 className="text-xl font-bold">About</h1>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="">Cost of delivery</a>
            </li>
            <li>
              <a href="">Payment Mscard</a>
            </li>
            <li>
              <a href="">Delivery Areas</a>
            </li>
            <li>
              <a href="">Drivers</a>
            </li>
          </ul>
        </div>

        <div class="footer-section delivery-section">
          <h1 className="text-xl font-bold">Delivery</h1>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="">Cost of delivery</a>
            </li>
            <li>
              <a href="">Payment Mscard</a>
            </li>
            <li>
              <a href="">Delivery Areas</a>
            </li>
            <li>
              <a href="">Drivers</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact-section">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <p>Email: info@example.com</p>
            </li>
            <li>
              <p>Phone: (555) 123-4567</p>
            </li>
            <li>
              <p>Address: 123 Main Street, Cityville, State, 12345</p>
            </li>
            <li>
              <p>Phone: (555) 123-4567</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
