import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Products</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  All Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Best Sellers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Support</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Shipping & Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-sm">
              Address: 13B wilkinson road, Freetown, Sierra Leone
            </p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@mikoil.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 MIK Palm Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
