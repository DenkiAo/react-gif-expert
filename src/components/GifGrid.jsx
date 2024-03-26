// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // 👀 No es buena práctica colocar funciones dentro de este bloque (llamado functional component), esto debido a que dicha función se estaría reprocesando cuando el componente se vuelva a dibijar según se necesite en él.

  // La definición y uso de un custom Hook es la siguiente:
  const { images, isLoading } = useFetchGifs( category );

  /*
  * En este caso, useState se emplea para poder almacenar las imágenes y sus
  * atributos que se obtienen de la API de Giphy, para las categorías que se
  * inicializan en GifExpertApp más las que se agreguen.
  */
  /* const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);

    setImages(newImages);
  } */

  /*
  * Para evitar que se vuelva a llamar la función getGifs se usa
  * useEffect, que es un Hook de efecto que se ejecuta cuando el componente se monta o0 cuando un elemento cambia, en este caso: la categoría cambia.
  */
  /* useEffect( () => {
    getImages();
  }, [] ); */

  /*
  * Es posible el crear nuevas imágenes usando useState de la siguiente forma
  * useEffect( () => {
  *    getGifs(category).then( newimages => setImages(newimages) );
  * }, [] );
  */

  return (
    <>
      <h3>{category}</h3>
      {/* Una forma para desplegar elementos html solo cuando se necesita ⬇️ */}
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            /*
            * Al componente se le pueden pasar los atributos de la sig. forma:
            * <GifItem key={image.id} title={image.title} url={image.url} />
            * En esta ocasión, se utilizará una técnica llamada esparcir properties
            */
            <GifItem key={image.id} { ...image } />
          ))
        }
      </div>
    </>
  );
}
