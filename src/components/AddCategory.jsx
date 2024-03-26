import { useState } from "react"

  /*
  * En el escenario actual de este componente,
  * en el que queremos recibir una propiedad (prop) determinada
  * basta con desestructurar la información recibida. Es decir,
  * todo lo que se manda desde GifExpertApp
  */
export const AddCategory = ({ onNewCategory }) => {
  /*
  * Para poder obtener los valores en tiempo real, es necesario poder manejar el input,
  * para ello utilizaremos el hook de useState.
  */

  const [inputValue, setInputValue] = useState('');

  /*
   * Para el parámetro de la función onInputChange el default es pasar 'event',
  * pero se puede desestructurar al objeto que necesitamos, en esta caso: target.
  */
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    /*
    * Para esta linea ⬇️ es importante detallar que se está
    * recibiendo la función setCategories de GifExpertApp,
    * por lo tanto, se necesita mandar un callback, en el que le
    * pasamos todas las categrías dadas de alta previamente para
    * que no se pierdan al momento de actualizar el valor de 'inputValue'
    */
    //setCategories((categories) => [ inputValue, ...categories ]);
    /*
    * Con esta nueva llamada ⬇️ ahora solo se llama la función 'onAddCategory' del
    * componente 'GifExpertApp' para que esta retorne la lista completa de elementos :)
    */
    onNewCategory(newInputValue);
    // A continuación ⬇️ se limpia el campo de texto
    setInputValue('');
  }

  return (
    /*
    * Repitiendo una mejor práctica, la lógica de la función onSubmit
    * se puede resumir de '(event) => onSummit(event)' a simplemente 'onSubmit', esto porque la función usa el argumente event
    * y este a su vez se usa inmediatamente para mandarselo a la función
    */
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
  /*
   * Para onChange, recordemos que la función siempre manda un evento a traves de la función 'onInputChange'
   * De tal forma que se traduce como (event) => onInputChange(event)!
   * Pero como el argumento event es el mismo que se le manda a la función onInputChange que se quiere ejecutar 
   * entonce se puede omitir de la notación y se seguirá enviando.
  */
}
