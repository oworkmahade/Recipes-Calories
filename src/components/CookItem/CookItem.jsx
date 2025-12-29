import PropTypes from "prop-types";

const CookItem = ({ item }) => {
  return <div>{item.recipe_id}</div>;
};

CookItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CookItem;
