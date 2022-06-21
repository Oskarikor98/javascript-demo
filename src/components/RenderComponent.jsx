import { useQuery } from "@apollo/client"
import { DataGrid } from "@mui/x-data-grid"
import { GET_COUNTRIES } from "../graphQL/queries"


export default function RenderComponent() {


    //Luodaan sarakkeet taulukolle
    const columns = [
        { field: 'maa', headerName: 'Maa', width: 250 },
        { field: 'pääkaupunki', headerName: 'Pääkaupunki', width: 250 },
      ];

      //Kutsutaan rajapintaa GET_COUNTRIES kutsulla
      const {data, loading, error} = useQuery(GET_COUNTRIES);

      if(loading) {
        return(
            <p>Loading...</p>
        )
    }

    //Luodaan rivit taulukolle
   const rows = data.countries.map((country, index) => ({
        id: index,
        maa: country.name,
        pääkaupunki: country.capital
    }));

    //Palautetaan piirrettävä taulukkokomponentti
    return (
            <div>
                <DataGrid rows={rows} columns={columns} autoHeight  /> 
            </div>
    
        );
    }