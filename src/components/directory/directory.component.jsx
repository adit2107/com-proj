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
                title:'bread',
                imageUrl: require('../../assets/images/bread.jpg'),
                id: 3
              },
              {
                title: 'brownies',
                imageUrl: require('../../assets/images/brownie.jpg'),
                size: 'large',
                id: 4
              },
              {
                title: 'cake',
                imageUrl: require('../../assets/images/cake.jpg'),
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