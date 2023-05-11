import CarbonsContext from "./../contexts/carbons";
import { useContext, useEffect, useState } from "react";
import RetiredList from "./../components/RetiredList";
import useSearch from "./../hooks/useSearch";
import { gql } from "@apollo/client";
import useAddress from "./../hooks/useAddress";

const DEFAULT_QUERY = gql`
  query SearchTco2Tokens($user: String!, $searchQuery: String!, $first: Int!) {
    user(id: $user) {
      id
      retirementsCreated {
        id
        amount
        token(where: { name_contains_nocase: $searchQuery }, first: $first) {
          id
          name
          symbol
          score
        }
      }
    }
  }
`;

const RetiredScreen = ({ navigation }) => {
  const { initializeCarbons } = useContext(CarbonsContext);
  const address = useAddress();

  const [query, setQuery] = useState("");

  const [carbons, setCarbons] = useState<object[]>([]);

  const { data, loading, error } = useSearch("", DEFAULT_QUERY, {
    searchQuery: query,
    first: 20,
    user: address,
  });

  useEffect(() => {
    if (address === "0x0000000000000000000000000000000000000000" || !address) return;

    const _carbons = data?.user?.retirementsCreated ?? [];

    const tokens = _carbons.map((carbon) => {
      const { id, amount, token } = carbon;
      const { name, symbol, score }: any = token;
      return {
        id,
        name,
        symbol,
        score,
        amount,
      };
    });

    initializeCarbons(tokens);
    setCarbons(tokens);
  }, [data]);

  return (
    <RetiredList
      carbons={carbons}
      loading={loading}
      error={error}
      setQuery={setQuery}
      navigation={navigation}
    />
  );
};

export default RetiredScreen;
