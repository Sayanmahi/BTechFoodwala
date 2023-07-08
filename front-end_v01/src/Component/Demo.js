import axios from "axios";

import { useEffect,useState } from "react";




export default function Home() {

  const [institutelist, setinstitutelist] = useState([]);

  useEffect(() => {

    axios

      .get("https://localhost:7126/api/Order/Get")

      .then((response) =>

      {

        setinstitutelist(response.data);

        // console.log(response.data);

      })

  },[]);

  return (

    <div>

      <h1>Home Pages</h1>

      {

        institutelist.map((InstituteDetail) => {

          const { id, qty, price, itemId, date } = InstituteDetail;

          return <div key={id}>

              <h3>{id}</h3>

              <h3>{qty}</h3>

              <h3>{price}</h3>

              <h3>{itemId}</h3>

              <h3>{date}</h3>


            </div>

        })

      }

    </div>

  );

}

// has context menu