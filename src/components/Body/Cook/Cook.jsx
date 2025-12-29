import PropTypes from "prop-types";
import CookItem from "../../CookItem/CookItem";

const Cook = ({ count, cookItems }) => {
  return (
    <div className="border-gray-400 border m-4 p-4 w-1/3 rounded-3xl">
      <h1 className="text-xl font-bold p-4 border-b">Want to cook: {count}</h1>

      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="border-b text-gray-400">
            <th className="text-left text-sm py-2">Name</th>
            <th className="text-left text-sm py-2">Time</th>
            <th className="text-left text-sm py-2">Calories</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cookItems.map((item, idx) => (
            <CookItem key={idx} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Cook.propTypes = {
  count: PropTypes.number.isRequired,
  foodBlog: PropTypes.object.isRequired,
  cookItems: PropTypes.array.isRequired,
};

export default Cook;
