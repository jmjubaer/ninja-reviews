import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const Categories = () => {
  const { id } = useParams();

  // fetch the data by using graphql query
  const get_review = gql`
    query getReviews($id: ID!) {
      categorie(id: $id) {
        data {
          id
          attributes {
            category
            reviews {
              data {
                id
                attributes {
                  name
                  rating
                  body
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(get_review, {
    variables: { id },
  });
  console.log(data);
  if (loading) return <p>Loading ........</p>;
  if (error) return <p>Error:( </p>;
  return (
    <div>
      <div className='my-1 mb-5 text-lg font-medium flex gap-2'>
        <h2>Category:</h2>
        <p className="font-bold text-2xl capitalize">{data.categorie.data.attributes.category}</p>
      </div>
      <div className=''>
        {data?.categorie.data.attributes.reviews.data.map((reviews) => (
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
    </div>
  );
};
export default Categories;
