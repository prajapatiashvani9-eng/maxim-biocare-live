import { useState } from "react";
import products from "../products";
 
function useProductFilters() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
 
  // Unique Types
  const types = ["All", ...new Set(products.map((item) => item.type))];
 
  // Unique Categories
  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];
 
  // Filter products
  const filteredProducts = products.filter((product) => {
    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.composition.toLowerCase().includes(search.toLowerCase());
 
    const typeMatch = typeFilter === "All" || product.type === typeFilter;
 
    const categoryMatch =
      categoryFilter === "All" || product.category === categoryFilter;
 
    return searchMatch && typeMatch && categoryMatch;
  });
 
  // Reset filters
  const resetFilters = () => {
    setSearch("");
    setTypeFilter("All");
    setCategoryFilter("All");
  };
 
  return {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    types,
    categories,
    filteredProducts,
    resetFilters,
  };
}
 
export default useProductFilters;
 