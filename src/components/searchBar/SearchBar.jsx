import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {

  const [search, setSearch] = useState("");

    return (
    <div>
      <div>
        <input
          onChange={handlechange}
          type="text"
          placeholder="Search your pokemon"
          value={search}
        />
        <button className={styles.btnPrimary}>
          ¿Que quieres aprender?
        </button>
      </div>
    </div>
  );
}

export default SearchBar;