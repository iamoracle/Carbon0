import CarbonsContext from "./../contexts/carbons";
import { useContext, useEffect, useState } from "react";
import CarbonList from "./../components/CarbonList";
import useSearch from "./../hooks/useSearch";

const HomeScreen = ({ navigation }) => {
  const { initializeCarbons } = useContext(CarbonsContext);
  const [carbons, setCarbons] = useState<object[]>([]);

  const [query, setQuery] = useState("");

  const { data, loading, error } = useSearch(query);

  useEffect(() => {
    const _carbons = data?.tco2Tokens;
    initializeCarbons(_carbons ?? []);
    setCarbons(_carbons);
  }, [data]);

  return (
    <CarbonList
      carbons={carbons ?? []}
      loading={loading}
      error={error}
      setQuery={setQuery}
      navigation={navigation}
    />
  );
};

export default HomeScreen;
