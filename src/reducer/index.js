const postsInitialState = {
    loaded: false,
    loading: false,
    errors: [],
    data: [],
    initData: {
        title: 'Preloaded Title',
        text: 'Preloaded Text'
    }
};

const postsReducer = ( state = postsInitialState, action) => {
    switch( action.type ){
        case 'BOOM':
            return{
                ...state,
                data: [
                    {
                        id: 1
                    }
                ]
            }

        default:
            return state;
    }
}

export default postsReducer;