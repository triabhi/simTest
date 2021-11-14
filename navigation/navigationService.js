import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}
function dispatch(navigateAction) {
    _navigator.dispatch(navigateAction);
}

export default {
    navigate,
    dispatch,
    setTopLevelNavigator,
};