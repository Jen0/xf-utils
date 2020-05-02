const ab: number = 1;
interface Person {
  name: string;
  age: number;
}
const obj: Person = {
  name: "小兵",
  age: 18,
};

export const fn = (data: Person) => {
  const newData = { head2: true, ...data };
  return Object.keys(newData).map((key) => console.log(key));
};
// fn({ name: "hah ", age: 20 });
