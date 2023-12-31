import React from 'react';
import CardDetails from '../card-details';
import './card-detail-list.css';
import Button from '../button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { openModal } from '../../store/reducers/modalReducer';
import { setRemoveTrelloTitle } from '../../store/reducers/trelloReducer';

interface CardDetailsListProps {
  label?: string;
  data: DataProps[];
  item?: { id: number | undefined; title: string };
  cardItemId?: number;
}

export interface DataProps {
  id: number;
  name: string;
  title: string;
}

const CardDetailsList: React.FC<CardDetailsListProps> = ({
  label,
  data,
  item,
  cardItemId,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveTitle = () => {
    dispatch(setRemoveTrelloTitle(cardItemId));
  };

  return (
    <div className="styled-card-detail-list">
      <div
        className="styled-card-detail-list-delete"
        onClick={() => handleRemoveTitle()}
      />
      <div className="styled-card-detail-list-label">{label}</div>
      {data.length > 0 && (
        <div className="styled-card-detail-list-cardDetails">
          {data.map((mi) => (
            <CardDetails
              key={mi.id}
              label={mi.name}
              title={item?.title}
              cardItemId={mi.id}
            />
          ))}
        </div>
      )}
      <Button
        label="Add Card"
        onClick={() =>
          dispatch(
            openModal({
              component: 'add-card',
              title: 'Add Card',
              meta: { item },
            })
          )
        }
        maxWidth
        backgroundColour="blue"
        colour="white"
        marginTop={10}
      />
    </div>
  );
};

export default CardDetailsList;
