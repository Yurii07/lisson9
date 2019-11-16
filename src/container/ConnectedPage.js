import { connect } from 'react-redux';
import Page from '../component/page';

const mapStateToProps = (state) => ({
    data: state.initData
});

const mapDispatchToProps = ( dispatch ) => ({
    handler: () => {
        dispatch({ type: 'BOOM'});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);