import camelize from "camelize";
import { ciudades } from "../../index";

export const storesrequest = (location = "0.8147289,-77.7194738") => {
  return new Promise((resolve, reject) => {
    const ciudad = ciudades[location];

    if (!ciudad) {
      reject("ciudad no encontrada");
    }

    resolve(ciudad);
  });
};

export const storesTransform = ({ results = [] }) => {
  const mappedResults = results.map((store) => {
    return {
      ...store,
      isClosed: store.business_status === "CLOSED_TEMPORARILY",
      address: store.vecinity,
    };
  });

  return camelize(mappedResults);
};

storesrequest()
  .then(storesTransform)
  .then((transformedResponse) => {})
  .catch((err) => {});
