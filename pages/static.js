import Countries from "@/components/Countries";
import MexTest from "@/components/MexTest";
import clientCountries from "@/utils/apollo/clientCountries";
import GET_COUNTRIES from "@/utils/apollo/queries/getCountries";

export default function Static({ countries }) {
    return (
        <>
            <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Static Rendering</h1>
                <Countries dataType='static' countries={countries}/>
            </div>

            <div className="w-full bg-blue-200 h-screen flex items-center flex-col justify-center text-center">
                <MexTest />
            </div>
        </>
    )
}

// Fetching countries data

export async function getStaticProps() {
    const { data } = await clientCountries.query({
        query: GET_COUNTRIES,
    });

    return {
        props: {
            countries: data.countries.slice(0, 20),
        },
    };
}