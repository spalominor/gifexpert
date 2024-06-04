import PropTypes from 'prop-types';
export const GifCard = ({ title, url, id }) => {
  return (
    <div className='bg-white p-1 rounded-md'>
        <img src={url} className='h-36 w-auto m-auto' alt={title} />
        <p>{ title }</p>
    </div>
  );
};
GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};