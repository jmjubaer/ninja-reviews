import { useParams } from "react-router-dom";
// import UseFetch from "../hooks/UseFetch";
import { gql, useQuery } from "@apollo/client";

const SingleReview = () => {
  const { id } = useParams();
  // fetch the data by using the link
  // const { data, error, loading } = UseFetch(
  //   `http://localhost:1337/api/reviews/${id}`
  // );

  // fetch the data by using graphql query
  const get_review = gql`
    query getReview($id: ID!) {
      review(id: $id) {
        data {
          id
          attributes {
            rating
            name
            body
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(get_review,{
    variables: { id }
  });
  console.log(data);
  if (loading) return <p>Loading ........</p>;
  if (error) return <p>Error:( </p>;
  return (
    <div>
      <div className=''>
        <h2 className='text-2xl font-bold capitalize'>
          {data?.review?.data.attributes.name}
        </h2>
        <p className='text-lg'>
          Ratting:{" "}
          <span className='font-bold'>{data?.review?.data.attributes.rating}</span>
        </p>
        <div className='my-3'>
          {data?.review?.data?.attributes.body?.map((text, idx) => (
            <p key={idx} className='py-2'>
              {text.children[0].text}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
