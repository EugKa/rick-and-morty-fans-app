import React, { useState } from 'react'
import { CardItem, PaginationList, Spinner } from '../../components';
import { ICharacter } from '../../interface/character';
import { useAppDispatch } from '../../store/hooks';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { dataThunk } from '../../store/features';


export const Characters = () => {
    const [page, setPage] = useState(1)
    const location = useLocation();
    const dispatch = useAppDispatch();

    const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(dataThunk({
            searchBy: location.pathname,
            page
        }))
    }

    const res = useData(location, page);

    if(!res) {
        return <Spinner/>
    }

    return (
        <>
            <Grid container>          
                {res.map((item: ICharacter) => {
                    return <CardItem key={item.id} item={item}/>
                })}                                 
            </Grid>
           <PaginationList page={page} handleChange={pageHandler} count={20}/>
        </>
        
    )
}
