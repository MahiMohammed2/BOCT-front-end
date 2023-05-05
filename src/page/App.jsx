import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
// const [Arriver, setArriver] = useState([]);

// useEffect(() => {
//   const affiche = async () => {
//       const accesToken = localStorage.getItem("accessToken");
//       await axios({
//           method: "get",
//           url: "http://localhost:8000/api/superadmin/",
//           headers: {
//               "Accept": "application/json",
//               "Authorization": 'Bearer ' + accesToken
//           }
//       }).then((res) => {
//           setArriver(res.data.Arriver)
//       })
//   }
//   affiche();
// }, []);