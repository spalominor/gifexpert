import PropTypes from 'prop-types';
import { useState } from 'react';
export const AddCategory = ({ handleAdd }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if( inputValue.trim() ){
            setInputValue('');
            handleAdd( inputValue );
        }
    };
  return (
    <form
        className="flex [&>*]:outline-none"
        onSubmit={handleSubmit}
    >
    <input
        onChange={ e => setInputValue( e.target.value ) }
        value={inputValue}
        placeholder='Añadir categoría'
        className="border-y-2 border-l-2 rounded-l-full px-3 py-1 border-black"
    />
    <button
      className="rounded-r-full border-2 px-3 py-1 font-medium bg-black text-gray-300 border-black"
    >
      Agregar
    </button>
  </form>
  );
};
AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired,
};