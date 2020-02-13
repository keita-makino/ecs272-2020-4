import React from 'react';
import IndexTemplate from '../components/templates/Index';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

type Props = {};

const query = gql`
  {
    scatter {
      title
      x
      y
    }
    details {
      title
      name
    }
  }
`;
const Index: React.FC<Props> = (props: Props) => {
  const { data } = useQuery(query);
  return <IndexTemplate scatter={data.scatter} details={data.details} />;
};

export default Index;
