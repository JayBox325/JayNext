import CountriesList from "@/components/CountiesList";
import ClientSideRender from "@/components/ClientSideRender";
import GET_COUNTRIES from "@/utils/apollo/queries/getCountries";

function CountriesServer(props) {
    const countries = props.countries ?? null

    if (!countries) {
        return null
    }

    return (
        <>
            <p>Static countries.</p>
            <CountriesList countries={countries} />
        </>
    );
}

export async function getServerSideProps() {
    const { data } = await clientCountries.query({
        query: GET_COUNTRIES,
    });

    return {
        props: {
            countries: data.countries.slice(0, 20),
        },
    };
}

export default CountriesServer