import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Catalog } from "./components";

export const App = () => {
  const URL = "http://localhost:5000";

  const [products, setProducts] = useState([]);
  const [proConditions, setProConditions] = useState([]);

  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();

  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();

  const [productsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1); 

  // get products via searchbar
  const onSearch = (input) => {
    axios
      .get(`${URL}/api/search?q=${input}`)
      .then((res) => {
        setProducts(res.data);
        setProConditions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get all categories
  useEffect(() => {
    axios
      .get(`${URL}/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const handleCondition = (e) => {
    setCondition(e.target.value);
  };
  
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  // get products by category
  useEffect(() => {
     axios
      .get(`${URL}/api/products?category=${category}`)
      .then((res) => {
        setProducts(res.data);
        setProConditions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  //default products
  useEffect(() => {
     axios
      .get(`${URL}/api/products?category=MLA1144`)
      .then((res) => {
        setProducts(res.data);
        setProConditions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  // filter by condition
  useEffect(() => {
    if (condition === "new" || condition === "used") {
      setCondition(condition);
      setProducts(
        proConditions.filter((p) => p.condition.indexOf(condition) >= 0)
      );
    } else {
      setCondition(condition);
      setProducts(proConditions);
    }
  }, [condition]);

  // filter by price
  useEffect(() => {
    setProducts(
      products &&
        products
          .slice()
          .sort((a, b) =>
            price === "ascendent"
              ? a.price > b.price
                ? 1
                : -1
              : price === "descendent"
              ? a.price < b.price
                ? 1
                : -1
              : a.id > b.id
              ? 1
              : -1
          )
    );
  }, [price]);

   const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const allProducts = products.slice(firstProduct, lastProduct);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
 

  return (
    <Router>
    <div>
      <Navbar onSearch={onSearch} />
      <Catalog 
      products={allProducts} 
      categories={categories} 
      handleCondition={handleCondition}
      handlePrice={handlePrice}
      handleCategory={handleCategory}
      paginate={paginate}
      totalPages={pageNumbers.length}
      />
    </div>
    </Router>
  );
};

export default App;
