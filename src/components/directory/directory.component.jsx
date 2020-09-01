import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();
        // TODO: Add dynamic imports
        this.state = {
            sections: [{
                title: 'biscuits',
                imageUrl: require('../../assets/images/biscuit.jpg'),
                id: 1,
                linkUrl:'biscuits'
              },
              {
                title: 'cookies',
                imageUrl: require('../../assets/images/cookies.jpg'),
                id: 2
              },
              {
                title: 'cake',
                imageUrl: require('../../assets/images/bcake.jpg'),
                id: 3
              },
              {
                title: 'Surprise Me',
                imageUrl: require('../../assets/images/gift-box.jpg'),
                size: 'large',
                id: 4
              },
              {
                title: 'Assortment Box',
                imageUrl: require('../../assets/images/assortment.jpg'),
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