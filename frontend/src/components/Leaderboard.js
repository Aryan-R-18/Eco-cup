import { useEffect, useState } from "react";      //Aryan
import { db } from "../firebaseConfig";                //aryan
import { collection, getDocs } from "firebase/firestore";  //aryan

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const querySnapshot = await getDocs(collection(db, "housePoints"));
      let houseData = [];
      querySnapshot.forEach((doc) => {
        houseData.push({ id: doc.id, ...doc.data() });
      });
      setScores(houseData);
    };

    fetchScores();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">🏆 House Cup Leaderboard</h2>
      <ul>
        {scores.map((house) => (
          <li key={house.id} className="text-xl">
            {house.id}: {house.points} points
          </li>
        ))}
      </ul>
    </div>
  );                                    
}                                                //Aryan
