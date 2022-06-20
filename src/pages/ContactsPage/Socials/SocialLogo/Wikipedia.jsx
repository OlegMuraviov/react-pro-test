import PropTypes from 'prop-types';

const Wikipedia = ({ className, width, height, fill }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 32 32"
    >
      <path d="M31.791 6.522h-6.376v1.089h0.638c0.498 0 0.948 0.256 1.202 0.684s0.264 0.946 0.026 1.383l-6.857 12.587-3.123-7.445 2.942-5.398c0.609-1.117 1.777-1.811 3.049-1.811h0.348v-1.089h-6.586v1.089h0.638c0.498 0 0.948 0.256 1.202 0.684s0.264 0.946 0.026 1.383l-2.134 3.916-1.902-4.533c-0.138-0.329-0.104-0.687 0.094-0.984s0.515-0.467 0.871-0.467h0.697v-1.089h-7.794v1.089h0.311c1.455 0 2.759 0.867 3.322 2.209l2.81 6.698-3.131 5.748-5.539-13.203c-0.138-0.329-0.104-0.687 0.094-0.984s0.515-0.467 0.871-0.467h0.958v-1.089h-8.447v1.089h0.702c1.455 0 2.759 0.867 3.322 2.209l6.385 15.221c0.112 0.266 0.371 0.438 0.66 0.438 0.265 0 0.5-0.139 0.627-0.373l4.013-7.363 3.061 7.298c0.112 0.266 0.371 0.438 0.66 0.438 0.265 0 0.5-0.139 0.627-0.373l8.547-15.684c0.609-1.117 1.777-1.811 3.049-1.811h0.348v-1.089l-0.209 0z"></path>{' '}
    </svg>
  );
};

export default Wikipedia;

Wikipedia.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};