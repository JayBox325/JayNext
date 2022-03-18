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
            <p>Server side countries.</p>
            <CountriesList countries={countries} />
        </>
    );
}

export default CountriesServer