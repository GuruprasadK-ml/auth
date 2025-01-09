import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryMaster() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        console.log("Categories fetched:", response.data);
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.log("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Category Master</h2>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
}

export default CategoryMaster;
