import { useQuery, gql } from "@apollo/client";
import CountriesList from "@/components/CountiesList";
import ClientSideRender from "@/components/ClientSideRender";

const QUERY = gql`
    query GetProducts {
        entries(type: ["food", "drink"]) {
            slug
            title
            typeHandle
        }
    }
`;

function MexTest(props) {
    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    console.log(data)

    const products = data.entries

    return (
        <>
            <p>Client side mex Test.</p>
            <ClientSideRender>
            <div>
                {products.map((product) => (
                        <div key={product.slug}>
                            <h3>{product.title}</h3>
                        </div>
                    ))}
                </div>
            </ClientSideRender>
        </>
    );
}

export default MexTest