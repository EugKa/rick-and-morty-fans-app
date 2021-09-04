import React, { useEffect } from 'react'
import { getFullEp } from '../../store/features';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
interface EpisodesCardProps {
    episodes: any
}

export const EpisodesCard = ({ episodes }: EpisodesCardProps) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.dataSlice.fullEp)
  

    return (
        <div>
            {episodes}
        </div>
    )
}
