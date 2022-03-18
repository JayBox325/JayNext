import Countries from "@/components/Countries";
import clientCountries from "@/utils/apollo/clientCountries";
import GET_COUNTRIES from "@/utils/apollo/queries/getCountries";

export default function ServerSide({ countries }) {
    return (
        <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Server Side Rendering</h1>
            <Countries dataType='server' countries={countries} />
        </div>
    )
}

// Fetching countries data - has to be done in the PAGE.

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