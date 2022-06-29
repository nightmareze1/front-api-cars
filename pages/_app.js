import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import GlobalContextProvider from "../providers/GlobalContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
