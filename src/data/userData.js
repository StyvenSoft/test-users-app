
import { collection, getDocs, addDoc } from "firebase/firestore";
import User from '../models/users';
import db from '../helpers/firebase.config';

export const getUsers = async () => {
    try {
        const data = await getDocs(collection(db, 'users'));
        let array = [];
        data.forEach(doc => {
            const user = new User(
                doc.id,
                doc.data().name,
                doc.data().age,
                doc.data().address,
                doc.data().email
            );

            array.push(user);
        });
        return array;
    } catch (error) {
        throw error;
    }
}

export const addUser = async (user) => {
    try {
        await addDoc(collection(db, "users"), user);
    } catch (error) {
        throw error;
    }
}