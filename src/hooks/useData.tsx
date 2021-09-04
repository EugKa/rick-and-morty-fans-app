import { useEffect } from 'react'
import { dataThunk } from '../store/features';
import { useAppDispatch, useAppSelector } from '../store/hooks';

interface locationParam {
    pathname: string;
}

export const useData = (location: locationParam, page?: number) => {
    const dispatch = useAppDispatch();
    const generalData: any = useAppSelector((state) => state.dataSlice.dataState.results);
    
    useEffect(() => {
        dispatch(dataThunk({
            searchBy: location.pathname,
            page
        }))
    },[dispatch, page, location.pathname])

    return generalData;
}
