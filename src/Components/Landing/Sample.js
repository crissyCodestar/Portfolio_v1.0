
    import React from 'react';
    import {Button} from '../Button';
    import {Link} from 'react-router-dom';

    const PortfolioSample = () => (
      <div className='sample'>
        <p className='display-4'>Sample section od work</p>
        <div>
          Work
        </div>
        <div>

            <Link to='/playground'>
                <Button type='enter' colorValue='primary_gradient' text='Playground'/>
            </Link>

        </div>
      </div>
    )
    export default PortfolioSample;
