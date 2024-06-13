import { db } from "@/configs/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";


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

export const getSyllabusc = async (id: string) => {
    const courseRef = doc(db, "syllabuses", id);
    const courseSnap:any = await getDoc(courseRef);
    return { id: courseSnap.id, ...courseSnap.data()}
}

