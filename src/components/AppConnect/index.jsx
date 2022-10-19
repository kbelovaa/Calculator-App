import { connect } from 'react-redux';
import { addExpressionAction, clearHistoryAction } from 'Store/actions/historyActions';
import App from 'Components/App';

const mapStateToProps = (state) => ({
  onShowHistory: state.history.operationHistory,
  onGetTheme: state.theme.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onAddExpression: (expression) => dispatch(addExpressionAction(expression)),
  onClearExpressions: () => dispatch(clearHistoryAction()),
});

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnect;
