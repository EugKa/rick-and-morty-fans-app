import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { useData } from '../../hooks/useData';
import { PaginationList } from '../../components';
import styles from './index.module.scss'
import { dataThunk } from '../../store/features';


interface EpAndLocProps {
  columns: any;
}

export const EpAndLoc = ({ columns }:EpAndLocProps) => {
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(dataThunk({
        searchBy: location.pathname,
        page
    }))
}
  
  const res = useData(location, page);

  return (
    <div className={styles.episodes}>
      {res ? (
        <div className={styles.wrapper}>
          <div className={styles.gridWrapper}> 
            <DataGrid
              rows={res}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
            />
          </div>
          <PaginationList page={page} handleChange={pageHandler} count={3}/>
        </div>
        ) : (
          <div>
            Loading
          </div>
        )
      }
    </div>
    
  );
}