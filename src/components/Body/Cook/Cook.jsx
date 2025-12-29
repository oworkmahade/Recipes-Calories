import PropTypes from "prop-types";
import CookItem from "../../CookItem/CookItem";

const Cook = ({ count, cookItems }) => {
  return (
    <div className="border-gray-400 border m-4 p-4 w-1/3 rounded-3xl">
      <h1 className="text-xl font-bold p-4 border-b">Want to cook: {count}</h1>

      <div>
        {cookItems.map((item, idx) => (
          <CookItem key={idx} item={item}></CookItem>
        ))}
      </div>
    </div>
  );
};

Cook.propTypes = {
  count: PropTypes.number.isRequired,
  foodBlog: PropTypes.object.isRequired,
  cookItems: PropTypes.array.isRequired,
};

export default Cook;
