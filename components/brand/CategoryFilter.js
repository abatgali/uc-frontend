// components/CategoryFilter.js
import React from "react";
import styles from "@/app/styles/CategoryFilter.module.css";

export default function CategoryFilter({ categories, onFilterChange }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <select
      className={`${styles.categoryFilter} ml-5`}
      onChange={(e) => {
        onFilterChange(e.target.value);
        scrollToTop();
      }}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.category}
        </option>
      ))}
    </select>
  );
}
