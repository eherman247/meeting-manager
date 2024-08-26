import { useEffect, useState } from "react";
import MainPageBody from "../components/MainPageBody";

const Home = () => {
  // const navLinks = ["/", "/joinGroup", "/manageGroup", "/createGroup"];
  const [groups, setGroups] = useState([{
    _id: '',
    user: {
      firstName: '',
      lastName: ''
    }
  }])

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch('/api/groups/')
      const json = await response.json()

      if (response.ok) {
        setGroups(json)
      }
    }

    fetchGroups()
  }, [])

  return (
    <div className="p-2 ">
      <MainPageBody></MainPageBody>
      <div>
        {groups && groups.map((group) => (
          <p key={group._id}>{group.user.firstName} {group.user.lastName}</p>
        ))}
      </div>
    </div>

  );
};

export default Home;
