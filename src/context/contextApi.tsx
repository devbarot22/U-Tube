import { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

const defaultValue = {};

export const Context = createContext<any>(defaultValue);

export const AppContext = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {
    fetchSelectedCategoryData(selectCategories)
  }, [selectCategories])

  const fetchSelectedCategoryData = (query: any) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider value={{
      loading,
      setLoading,
      searchResults,
      selectCategories,
      setSelectCategories,
      mobileMenu,
      setMobileMenu
    }}>
      {props.children}
    </Context.Provider>
  )
}