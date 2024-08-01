import { useState } from "react";
import "./App.css";
import { requestToGroqAI } from "./utils/groq";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { ModalComponent } from "./components/Modal";

// import { atomOneDark, darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const ai = await requestToGroqAI(message);
    setLoading(false);
    setData(ai);
  };

  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");
  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-[100%] w-full mx-auto">
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalPlacement={modalPlacement}
        setModalPlacement={setModalPlacement}
      />

      <div className="flex justify-between items-center bg-[#1e1e1e] w-full  fixed top-0 pt-2 px-6 pb-2">
        <img className="w-20" src="/assets/enigma-logo.png" alt="enigma logo" />

        <div className="">
          <h1 className="text-4xl  text-white font-bold">
            <span className="hidden md:inline-block">Turing Health - </span> Doc
            AI
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="font-bold text-white p-1 rounded-full bg-white"
        >
          <img
            src="/assets/emergency.png"
            alt="emergency icon"
            className="w-10 rounded-full"
          />
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1e1e1e] fixed bottom-0 px-4 flex gap-4 py-3 pb-4 w-full"
      >
        <input
          className="py-3 w-full px-4 text-sm rounded-md"
          placeholder="How To Be Healthy..."
          onChange={(e) => setMessage(e.target.value)}
          autocomplete="off"
          value={message}
          id="content"
          type="text"
        />
        <button
          type="submit"
          className={`${
            !loading ? "bg-indigo-700 hover:bg-indigo-600" : "bg-white"
          } font-bold text-white rounded-md px-3`}
          disabled={loading}
        >
          {!loading ? (
            <>Submit</>
          ) : (
            <img src="/assets/loading.gif" className="w-14" alt="loading" />
          )}

        </button>
      </form>

      {loading ? (
        <div div className="py-20 pb-20 w-full text-start">
          <div class="loader-line"></div>
        </div>
      ) : (
        data && (
          <div className="py-20 pb-20 w-full text-start">
            <SyntaxHighlighter
              language="readme"
              style={darcula}
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighlighter>
          </div>
        )
      )}
      
    </main>
  );
}

export default App;
