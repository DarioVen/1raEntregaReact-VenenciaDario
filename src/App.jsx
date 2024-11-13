import { ChakraProvider } from "@chakra-ui/react";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";

 

function App() {

  //TODO: agregar dinamismo: quiero que el loading sea dinamico y que se muestre el loader durante 3 segundos

  const loading = false;

 

  return (

    <ChakraProvider>

      <NavBar />

      {loading ? (

        <div>Loading...</div>

      ) : (

        <ItemListContainer greeting="Bienvenidos a mi proyecto react" />

      )}

    </ChakraProvider>

  );

}

 

export default App;