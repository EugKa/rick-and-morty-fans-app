import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { Paper } from '@material-ui/core';
import styles from './index.module.scss'


interface PaginationListProps {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count?: number;
}

export const PaginationList = ({ page, handleChange, count}:PaginationListProps) => {
    return (
        <Paper variant="outlined" square className={styles.paper}>
            <Pagination
                page={page} 
                color="primary" 
                className="pagination" 
                count={count} 
                onChange={handleChange}
                size="large"
            />
        </Paper>
    )
}