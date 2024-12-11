import {AuthorizationStatus} from '../../const';
import {Offer} from '../../types';
import Card from '../../components/card/card';
import cn from 'classnames';


type CardsListProps = {
  offers: Offer[];
  page?: 'cities' | 'near-places' | 'favorites';
  authorizationStatus: AuthorizationStatus;
  onCardHover?: (offer: Offer | null) => void;
};

function CardsList({page = 'cities', offers, onCardHover, authorizationStatus = AuthorizationStatus.Unknown}: CardsListProps): JSX.Element {
  const cardMouseEnterHandler = (offer: Offer): void => {
    if (onCardHover) {
      onCardHover(offer);
    }
  };

  const cardMouseLeaveHandler = (): void => {
    if (onCardHover) {
      onCardHover(null);
    }
  };

  const cardsList = offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      authorizationStatus={authorizationStatus}
      page={page}
      onCardMouseEnter={() => {
        cardMouseEnterHandler(offer);
      }}
      onCardMouseLeave={cardMouseLeaveHandler}
    />
  ));
  return (
    <div className={cn(
      {'cities__places-list places__list tabs__content': page === 'cities'},
      {'near-places__list places__list': page === 'near-places'},
      {'favorites__places': page === 'favorites'}
    )}
    >
      {cardsList}
    </div>
  );
}

export default CardsList;
