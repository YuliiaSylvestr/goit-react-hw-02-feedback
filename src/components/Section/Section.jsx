import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
