import { Link } from "react-router-dom";
// import UseFetch from "../hooks/UseFetch";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  // fetch the data by using the link
  // const { data, error, loading } = UseFetch(
  //   "http://localhost:1337/api/reviews"
  // );



  // fetch the data by using graphql query
  const get_reviews = gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          rating
          name
          body
          categories{
            data{
              attributes{
                category
              }
            }
          }
        }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(get_reviews);
  console.log(data);
  if (loading) return <p>Loading ........</p>;
  if (error) return <p>Error:( </p>;
  return (
    <div>
      {data?.reviews?.data?.map((reviews) => (
        <div key={reviews?.id} className=''>
          <h2 className='text-2xl font-bold capitalize'>
            {reviews?.attributes?.name}
          </h2>
          <p className='text-lg'>
            Ratting:{" "}
            <span className='font-bold'>{reviews?.attributes?.rating}</span>
          </p>
          <div className='my-3'>
            <p className='py-2'>
              {reviews?.attributes.body[0].children[0].text}{" "}
              <Link
                to={`/reviews/${reviews?.id}`}
                className='text-blue-500 hover:text-blue-800 '>
                Read more......
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
