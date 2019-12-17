const mapStateToProps = (state, ownProps) => ({
    someData: selectSomething(state),
    otherData: state.otherReducer.other,
});

class SomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(SomeAction.requestSomething());
    }

    render() {
        const { someData, otherData } = this.props;

        return (
            <div className={styles.wrapper}>
                <h1>{someData.header}</h1>
                <main>{someData.description}</main>
                <button onClick={this._onClick}>{otherData.buttonLabel}</button>
            </div>
        );
    }

    _onClick = (event) => {
        console.log(`I was clicked`);
    }

}

export default connect(mapStateToProps)(SomePage);