import { useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

const SingleReview = () => {
  const { id } = useParams();
  console.log(id);
  const { data, error, loading } = UseFetch(
    `http://localhost:1337/api/reviews/${id}`
  );
  console.log(data);
  if (loading) return <p>Loading ........</p>;
  if (error) return <p>Error:( </p>;
  return (
    <div>
      <div className=''>
        <h2 className='text-2xl font-bold capitalize'>
          {data?.data.attributes.name}
        </h2>
        <p className='text-lg'>
          Ratting:{" "}
          <span className='font-bold'>{data?.data.attributes.rating}</span>
        </p>
        <div className='my-3'>
          {data?.data?.attributes.body?.map((text, idx) => (
            <p key={idx} className='py-2'>
              {text.children[0].text}{" "}
            </p>
          ))}
          <p className='py-2'>
            {/* {reviews?.attributes.body[0].children[0].text}{" "} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
