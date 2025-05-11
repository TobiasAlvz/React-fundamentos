import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="John Doe"
        jobTitle="Full-stack javascript developer at Acme Inc."
        phone="+5511987654321"
        email="john.doe@email.com"
        imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}

export default App;
