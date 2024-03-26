import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  /*
  * Para esta aplicación es necesario persistir la información obtenida. 
  * Para ello utilizaremos el hook de useState
  *
  */

  const [categories, setCategories] = useState([ 'One Punch Man', 'Naruto' ]);

  const onAddCategory = ( newCategory ) => {
    // Validaición para impedir que se introduzca elemento con mismo nombre
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //setCategories(categories => [newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo ⬇️ */}
      <h1>GifExpertApp</h1>
      {/* aTdXHQCbBgC5zJCJyLMH0E3eh0mq0cn3 */}

      {/* Input ⬇️ */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />

      {/* Listado de GIF's */}
      {/* ¿Cómo podemos evitar que se repitan los valores de la lista al momento de
      agregarlos? */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* GIF Item ⬇️ */}
    </>
  );
}
