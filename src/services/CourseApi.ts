import { db } from "@/configs/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


export const getAllCourses = async () => {
    try {
        const coursesSnapshot = await getDocs(collection(db, "course"));
        const coursesList = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return coursesList
    } catch (error: any) {
        console.log("error in getting the courses", error)
        return error?.message
    }
}

export const getCoursesById = async (id: string) => {
    const courseRef = doc(db, "course", id);
    const courseSnap = await getDoc(courseRef);
    if (courseSnap.exists()) {
        const res: any = ({ id: courseSnap.id, ...courseSnap.data() })
        return res
    }
    return null
}

export const getSyllabusc = async (id: string) => {
    const courseRef = doc(db, "syllabuses", id);
    const courseSnap: any = await getDoc(courseRef);
    return { id: courseSnap.id, ...courseSnap.data() }
}
export const UserLogin = async (data: any) => {
    const res = await addDoc(collection(db, "student"), data);
    return res
}

export const alredyRegisteredUSer = async (email: string) => {
    const usersRef = collection(db, 'student');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot: any = await getDocs(q);
    if (querySnapshot.empty) return null

    let userData = null;
    querySnapshot.forEach((doc:any) => {
        userData = { id: doc.id, ...doc.data() };
    });

    return userData;
}


