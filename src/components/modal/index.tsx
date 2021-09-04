import React, { useState, useEffect } from 'react';
import { useStylesModal, getModalStyle} from './styles'
import { Modal } from '@material-ui/core';
import { ICharacter } from '../../interface/character';
import { EpisodesCard, Spinner } from '..';


interface CardModalProps {
  item: ICharacter;
  open: any;
  handleClose: any;
}

export const CardModal = ({ item, open ,handleClose }: CardModalProps) => {
  const [epArray, setEpArray] = useState<any>()
  const classesModal = useStylesModal();
  const [modalStyle] = useState(getModalStyle);
  
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classesModal.paper}>
        {
          item ? (
            <div>
              <h2 id="simple-modal-title">Name: {item.name}</h2>
              <p id="simple-modal-description">
                Species: {item.species}
              </p>
              <p id="simple-modal-description">
                Gender: {item.gender}
              </p>
                {item && item.location && item.location.name ? (
                    <div>Location: {item.location.name}</div>
                  ) : (
                    null
                  )
                }
                {item && item.origin && item.origin.name ? (
                    <div>Origin: {item.origin.name}</div>
                  ) : (
                    null
                  )
                }
              <p id="simple-modal-description">
                Status: {item.status}
              </p>
              {item && item.origin && item.origin.name && item.episode ? (
                  <div>Episodes: {item.episode.map((ep:string) => {
                    return <EpisodesCard key={ep} episodes={ep}/>
                  })}</div>
                ) : (
                  null
                )
              }
            </div>
          ) : (
            <Spinner/>
          )
        } 
      </div>
      </Modal>
  )
}
