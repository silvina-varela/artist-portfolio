import firebase_app from "../config";
import {
  getFirestore,
  getDocs,
  collection,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";

export default async function getDocuments(
  collectionName: string
): Promise<DocumentData[]> {
  try {
    const db = getFirestore(firebase_app);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, collectionName)
    );
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
