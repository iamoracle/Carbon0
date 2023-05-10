import CarbonsContext from "../contexts/carbons";
import { useContext, useEffect, useState } from "react";
import OwnedList from "../components/OwnedList";
import useSearch from "../hooks/useSearch";
import { gql } from "@apollo/client";
import useAddress from "./../hooks/useAddress";

const DEFAULT_QUERY = gql`
  query SearchTco2Tokens($user: String!, $searchQuery: String!, $first: Int!) {
    user(id: $user) {
      id
      tokensOwned {
        id
        balance
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

const OwnedScreen = ({ navigation }) => {
  const { initializeCarbons } = useContext(CarbonsContext);
  const address = useAddress();

  const [query, setQuery] = useState("");

  const [carbons, setCarbons] = useState([]);

  const { data, loading, error } = useSearch("", DEFAULT_QUERY, {
    searchQuery: query,
    first: 20,
    user: address,
  });

  useEffect(() => {
    if (address === "0x0000000000000000000000000000000000000000") return;

    const _carbons = data?.user?.tokensOwned ?? [];

    const tokens = _carbons.map((carbon) => {
      const { id, balance, token } = carbon;
      const { id: tokenID, name, symbol, score }: any = token;
      return {
        id,
        tokenID,
        name,
        symbol,
        score,
        balance,
      };
    });

    initializeCarbons(tokens);
    setCarbons(tokens);
  }, [data]);

  return (
    <OwnedList
      loading={loading}
      error={error}
      setQuery={setQuery}
      navigation={navigation}
      carbons={carbons}
    />
  );
};

export default OwnedScreen;
