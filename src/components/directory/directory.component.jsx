import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import Biscuit from '../../assets/images/biscuit.jpg';
import Bread from '../../assets/images/bread.jpg';
import Brownie from '../../assets/images/brownie.jpg';
import Cake from '../../assets/images/cake.jpg';
import Cookies from '../../assets/images/cookies.jpg';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();
        // TODO: Add dynamic imports
        this.state = {
            sections: [{
                title: 'biscuits',
                imageUrl: Biscuit,
                id: 1,
                linkUrl:'biscuits'
              },
              {
                title: 'cookies',
                imageUrl: Cookies,
                id: 2
              },
              {
                title:'bread',
                imageUrl: Bread,
                id: 3
              },
              {
                title: 'brownies',
                imageUrl: Brownie,
                size: 'large',
                id: 4
              },
              {
                title: 'cakes',
                imageUrl: Cake,
                size: 'large',
                id: 5
              }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps}/>
                ))
                }
            </div>
        )
    }
}

export default Directory;