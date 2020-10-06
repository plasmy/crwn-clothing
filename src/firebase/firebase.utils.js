import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCkuHbkFYHhuODhJNlD26cMO2ZtFrEtivo",
    authDomain: "crwn-db-b1754.firebaseapp.com",
    databaseURL: "https://crwn-db-b1754.firebaseio.com",
    projectId: "crwn-db-b1754",
    storageBucket: "crwn-db-b1754.appspot.com",
    messagingSenderId: "405992252988",
    appId: "1:405992252988:web:939bbc0ff32d7d74ca8539",
    measurementId: "G-DNML3KPX8Q"
}

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase