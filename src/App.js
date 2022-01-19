import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";

const dummyList = [
  {
    id: 1,
    author: "tester1",
    content: "하이1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "tester2",
    content: "하이2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "tester1",
    content: "하이3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};
export default App;
