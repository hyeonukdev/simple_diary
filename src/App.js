import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import dummyData from "./datas/dummy.json";

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyData} />
    </div>
  );
};
export default App;
