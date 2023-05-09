import { gql, useQuery } from "@apollo/client";

const DEFAULT_QUERY = gql`
  query SearchTco2Tokens($searchQuery: String!, $first: Int!) {
    tco2Tokens(where: { name_contains_nocase: $searchQuery }, first: $first) {
      id
      name
      symbol
      score
    }
  }
`;

const useSearch = (
  searchQuery: string = "",
  default_query = DEFAULT_QUERY,
  variables = { searchQuery, first: 20, user: "" }
) => {
  const { loading, error, data } = useQuery(default_query, {
    variables,
  });

  return { loading, error, data };
};

export default useSearch;
