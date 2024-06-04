import PropTypes from 'prop-types';
import { GifCard } from './GifCard';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifLoading } from './GifLoading';


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

  return (
    <li className='list-none  w-2/3 m-auto my-4'>
        <h3 className='font-bold text-xl'>{ category }</h3>
        <ol className='grid grid-cols-3 gap-4'>
        {
            isLoading 
            ? 
            <GifLoading/>
            :         
            images.map( (g) => (
                <GifCard
                    key={ g.id }
                    {...g}
                />))
        }
        </ol>
    </li>
  );
};
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};