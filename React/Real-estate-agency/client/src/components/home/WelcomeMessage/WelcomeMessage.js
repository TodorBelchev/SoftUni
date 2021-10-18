import classes from './WelcomeMessage.module.css';

const WelcomeMessage = () => {
    return (
        <section className={classes['background-image']}>
            <div className={classes['home-container']}>

                <div className={classes.info}>
                    <h1>Discover Your Perfect Home</h1>
                    <h2>The Best Real Estate Deals</h2>
                </div>

            </div>
        </section>
    )
};

export default WelcomeMessage;