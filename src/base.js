import Rebase from 're-base';

const base = Rebase.createClass({
    apiKey: "AIzaSyAUN18h4ldxV9jelne_WKF1FVumJvYgcPM",
    authDomain: "find-us-3e8c2.firebaseapp.com",
    databaseURL: "https://find-us-3e8c2.firebaseio.com",
});

const facebookProvider = new base.auth.FacebookAuthProvider();
const googleProvider = new base.auth.GoogleAuthProvider();

export {base, facebookProvider, googleProvider}
