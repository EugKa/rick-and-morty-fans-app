import React from 'react';
import { Paper, Button, Card, Checkbox } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Input } from '../../components';
import styles from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToWatchList, deleteFromWatchList, updateItemFromWatchList } from '../../store/features/watch-list/watch-list-reducer';
import { IWatchList } from '../../interface/watch-list';


interface MyWatchListState {
    epfield: string;
}

export const MyWatchList = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<MyWatchListState>();
    const dispatch = useAppDispatch();
    const episodes: IWatchList[] = useAppSelector((state) => state.watchListReducer);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        dispatch(updateItemFromWatchList({
          id: id,
          complete: event.target.checked,
          episode: ''
        }));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteFromWatchList(id))
    }

    const onSubmit = (formData: MyWatchListState) => {
        dispatch(addToWatchList({
            id: Date.now(),
            episode: formData.epfield,
            complete: false
        }))
        reset();
    }
    
    return (
        <div className={styles.myWatchList}>
            <Card className={styles.card} variant="outlined">
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formWrapper}>
                        <Input {...register('epfield', { required: { value: true, message: 'Please enter episode'}})} error={errors.epfield!}/>
                        <Button className={styles.btn} variant="contained" color="primary" type="submit">
                            Add episode
                        </Button>
                    </div>
                </form>  
                <div>
                    {episodes.map((item: IWatchList) => (
                        <Paper className={styles.paper} key={item.id}>
                            <Checkbox
                                checked={item.complete}
                                onChange={(e) => handleChange(e, item.id)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            <h4>{item.episode}</h4>
                            <button type='button' onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                        </Paper>
                    ))}
                    </div>  
            </Card>
        </div>
    )
}
