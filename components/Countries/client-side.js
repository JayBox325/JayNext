import { useQuery, gql } from "@apollo/client";
import CountriesList from "@/components/CountiesList";
import ClientSideRender from "@/components/ClientSideRender";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

function CountriesClient(props) {
    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const countries = data.countries.slice(0,20);

    return (
      <>
        <p>Client side countries.</p>
        <ClientSideRender>
            <CountriesList countries={countries} />
        </ClientSideRender>
      </>
    );
}

export default CountriesClient