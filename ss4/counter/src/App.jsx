import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const useCounter = (step) => {

  const [count, setCount] =
      useState(0);

  const increase = () => {
    setCount(prev =>
        prev + step
    );
  };

  return {
    count,
    increase
  };
};

function App() {


  const counter1 =
      useCounter(1);


  const counter2 =
      useCounter(2);

  return (
      <div className="container mt-5">

        <h1 className="text-center mb-4">
          Counter App
        </h1>

        <div className="row">

          <div className="col-md-6">

            <div className="card p-4 text-center">

              <h2>
                Counter 1
              </h2>

              <h3>
                {counter1.count}
              </h3>

              <button
                  className="btn btn-primary"
                  onClick={
                    counter1.increase
                  }
              >
                Add 1
              </button>
            </div>
          </div>

          <div className="col-md-6">

            <div className="card p-4 text-center">

              <h2>
                Counter 2
              </h2>

              <h3>
                {counter2.count}
              </h3>

              <button
                  className="btn btn-success"
                  onClick={
                    counter2.increase
                  }
              >
                Add 2
              </button>

            </div>
          </div>

        </div>

      </div>
  );
}

export default App;