import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COCKTAILS = gql`
  query getCocktails {
    cocktail {
      id
      name
      glass
      category
      img

      ingredients {
        unit
        amount
        ingredient
        label
      }
    }
  }
`;

function CocktailsList() {
  const { loading, error, data } = useQuery(GET_COCKTAILS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) {
    console.log(data);
  }

  return (
    <ul>
      {data.cocktail.map((cocktail, index) => (
        <li key={index} value={cocktail.name}>
          {cocktail.name}
        </li>
      ))}
    </ul>
  );
}

export default CocktailsList;
