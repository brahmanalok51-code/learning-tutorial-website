
import UserUpdateForm from "./UserUpdateForm";

export default function Update() {
  const dummyUser = {
    _id: "67593f88sd987sd987",
    name: "Alok",
    email: "oldemail@example.com",
  };

  return <UserUpdateForm user={dummyUser} />;
}
