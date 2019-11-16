import React, { Component } from 'react'

export const StorageContext = React.createContext();

class Storage extends Component {
    state = { 
        cats: [
            { name: '123' }
        ]
    }

    addCat = ( name ) => {
        let newCats = [...this.state.cats];
        newCats.push({
            name
        });
        this.setState({ cats: newCats });
    }

    render(){
        const { children } = this.props;
        const { cats } = this.state;
        return(
            <StorageContext.Provider
                value={{
                    cats,
                    addCat: this.addCat
                }}
            >
                {children}
            </StorageContext.Provider>
        )

    }
}


export default Storage;