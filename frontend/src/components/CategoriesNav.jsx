import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const CategoriesNav = () => {
  // fetch the data by using graphql query
  const get_categories = gql`
    query get_categories {
      categories {
        data {
          id
          attributes {
            category
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(get_categories);
  console.log(data);
  if (loading) return <p>Loading ........</p>;
  if (error) return <p>Error:( </p>;
  return (
    <div className='flex justify-end text-xl mt-2'>
      <h2>Filter by categories:</h2>
      <div className='font-medium'>
        {data?.categories?.data?.map((category) => (
          <Link
            to={`/category/${category?.id}`}
            className='inline-block mx-3 text-blue-500 hover:text-blue-800 hover:underline
          '
            key={category?.id}>
            {category?.attributes?.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesNav;
