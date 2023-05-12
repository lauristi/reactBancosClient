import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Bancos() {
  const [bancos, setBancos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://nodewebapi.onrender.com/api/brasilApi/bancos")
      .then((res) => setBancos(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Bancos</h1>
       
       <div>
         <Link to="/">retornar a página inicial</Link>
       </div>   

      {loading ? (
        <div className="loading-spinner">Carregando...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ISPB</th>
              <th>Nome</th>
              <th>Código</th>
              <th>Nome Completo</th>
            </tr>
          </thead>
          <tbody>
            {bancos.map((banco) => (
              <tr key={banco.ispb}>
                <td>{banco.ispb}</td>
                <td>{banco.name}</td>
                <td>{banco.code}</td>
                <td>{banco.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}



// function Bancos() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://nodewebapi.onrender.com/api/brasilApi/bancos");
//         setData(response.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Bancos</h1>
//       <div>
//         <Link to="/">retornar a página inicial</Link>
//       </div>   
//       <ul>
//         {data.map((item) => (
//           <li key={item.ispb}>
//             {item.ispb} - {item.name} - {item.code} - {item.fullName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


export default Bancos;