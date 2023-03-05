import ChoosenBranch from "./components/Branches/ChoosenBranch";
import Branches from "./components/Frontpage/Branches";
import ChooseBranch from "./components/Frontpage/ChooseBranch";
import Header from "./components/Frontpage/Header";

function App() {

  const baseurl = "https://ms-proxy-api.deranged.dk/login";

  const headers = {
    "medlemsservice-association": "dds",
    "Content-Type": "application/json"
  };

  fetch(baseurl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      "email": "",
      "password": ""
    })
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  })


  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ChooseBranch />
      </div>
      <div>
        <Branches />
      </div>

      <div>
        <ChoosenBranch />
      </div>
    </div>
  );
}

export default App;
