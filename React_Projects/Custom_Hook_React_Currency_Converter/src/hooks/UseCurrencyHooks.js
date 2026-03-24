import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

    axios.get(url).then((res)=>
       setData(res.data[currency])
    )

  }, [currency]);

  return data;
}

export default useCurrencyInfo;