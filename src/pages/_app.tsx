import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";
import "ress";
import "../components/Editor/style.css";
import "../style.css";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  </div>
);

export default App;
