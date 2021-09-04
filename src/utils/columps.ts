import { GridColDef } from '@mui/x-data-grid';

export const episodeColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 400,
    },
    {
      field: 'episode',
      headerName: 'Episode',
      width: 200,
    },
    {
      field: 'air_date',
      headerName: 'Air date',
      width: 200,
    },
  ];
  
export  const locationColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 400,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 200,
    },
    {
      field: 'dimension',
      headerName: 'Dimension',
      width: 200,
    },
];