import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: {
      breed,
    },
  });
  const [datas, setDatas] = React.useState(data);

  React.useEffect(() => {
    if (data) {
      setDatas(data);
    }
  }, [data]);

  if (loading) return null;
  if (error) return `Error ${error}`;

  return (
    <>
      {datas ? (
        <img
          src={data.dog.displayImage}
          style={{ width: "100px" }}
          alt="Perrito"
        />
      ) : (
        loading
      )}
    </>
  );
}

export { DogPhoto };
