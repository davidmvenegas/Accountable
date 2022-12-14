import { collection , doc, getDocs, query, setDoc, where} from "firebase/firestore";
import { db } from "../config";

// Get supervisor

export const queryUser = async(user) => {
    try {
        const q = query(collection(db, 'user'), where('userId', "==", user.userId))
        const querySnapshot = await getDocs(q);

        const docs = querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return docs;

    } catch (error) {
        console.log(error)
        
    }
}

// Add or update supervisor

export const createNewUser = async (user) => {
    try {
        await setDoc(doc, 'users'),{
            userId : user.userId,
            supervisorId: '',
            username : '',
            totalcompletion : 0
        }
        console.log("User added")
        
    } catch (error) {
        console.log(error)
        
    }
}
