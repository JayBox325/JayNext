import ClientSideRender from "@/components/ClientSideRender";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function Countries(props) {
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
        <ClientSideRender>
            <div>
                {countries.map((country) => (
                    <div key={country.code}>
                        <h3>{country.emoji} - {country.name}</h3>
                    </div>
                ))}
            </div>
        </ClientSideRender>
    );
}