async function pleaseGetIt() {
    const docRef = doc(db, 'todos', {ticketId});

    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log("Document does not exist")
        }
    
    } catch(error) {
        console.log(error)
    }
}