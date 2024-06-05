function skillsMember() {
  const member = {
    name: 'John',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
  };

  const { skills } = member;
  console.log(skills); // ['JavaScript', 'React', 'Node']
}