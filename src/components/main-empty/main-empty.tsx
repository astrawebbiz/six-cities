import { useAppSelector } from '../../hooks';

function MainEmpty(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  return (
    <>
      <section className='cities__no-places'>
        <div className='cities__status-wrapper tabs__content'>
          <b className='cities__status'>No places to stay available</b>
          <p className='cities__status-description'>We could not find any property available at the moment in {activeCity}</p>
        </div>
      </section>
      <div className='cities__right-section'></div>
    </>
  );
}

export default MainEmpty;
