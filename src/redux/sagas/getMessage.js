import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const getMessageApi = async () => {
  const querySnapshot = await getDocs(collection(db, 'messages'));
  const messages = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toMillis(),
  }));
  return messages;
};
